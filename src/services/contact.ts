export interface ContactPayload {
  name: string;
  contact: string;
  topic: string;
  message: string;
}

export interface ContactResult {
  /** true = a real endpoint accepted the message, false = prototype mode */
  delivered: boolean;
}

const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT?.trim();

/**
 * Sends the contact form.
 * - With VITE_CONTACT_ENDPOINT set (Formspree, Web3Forms, your own API…) it POSTs JSON.
 * - Without it, the form behaves as the prototype from the design (nothing is sent).
 */
export async function sendContactMessage(payload: ContactPayload): Promise<ContactResult> {
  if (!ENDPOINT) {
    await new Promise((resolve) => setTimeout(resolve, 600));
    return { delivered: false };
  }

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) throw new Error(`Contact request failed with status ${response.status}`);
  return { delivered: true };
}
