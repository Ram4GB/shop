import resend from '@/lib/resend';
import { stripe } from '@/lib/stripe';
import supabase from '@/lib/supabase';
import { headers } from 'next/headers';
import Stripe from 'stripe';

export const POST = async (req: Request) => {
  try {
    const body = await req.text();
    const signature = headers().get('stripe-signature');

    if (!signature) {
      return Response.json({ message: 'Signature not found' }, { status: 404 });
    }

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET ?? '',
    ) as Stripe.CheckoutSessionCompletedEvent;

    const session = event.data.object as Stripe.Checkout.Session;

    const billingAddress = session.customer_details!.address;
    const shippingAddress = session.shipping_details!.address;

    if (event.type === 'checkout.session.completed') {
      const order = await supabase
        .from('orders')
        .update({
          status: 'Paid',
          shipping_address: JSON.stringify({
            name: session.customer_details!.name!,
            city: shippingAddress!.city!,
            country: shippingAddress!.country!,
            postalCode: shippingAddress!.postal_code!,
            street: shippingAddress!.line1!,
            state: shippingAddress!.state,
          }),
          billing_address: JSON.stringify({
            name: session.customer_details!.name!,
            city: billingAddress!.city!,
            country: billingAddress!.country!,
            postalCode: billingAddress!.postal_code!,
            street: billingAddress!.line1!,
            state: billingAddress!.state,
          }),
        })
        .throwOnError()
        .select()
        .single()
        .throwOnError()
        .then((res) => res.data);

      if (event.data.object.customer_details?.email) {
        resend.emails.send({
          from: 'leminhcuong2988@yahoo.com.vn',
          to: [event.data.object.customer_details.email],
          subject: 'Thanks for your order!',
          html: `Your order id is ${order?.id}. Thank you for your order! 🎉`,
        });
      }
    }

    return Response.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    console.log('error', error);
    return Response.json({ message: (error as any)?.message ?? 'Something error' }, { status: 500 });
  }
};
