'use client';
import { send } from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

export default function ContactForm() {
  const form = useForm();

  return (
    <form
      className="flex flex-col gap-3.5 pb-16 md:pb-0"
      onSubmit={form.handleSubmit((data) => {
        try {
          send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE!,
            {
              from_name: data.name,
              email: data.email,
              message: data.description,
              reply_to: data.email
            },
            { publicKey: process.env.NEXT_PUBLIC_EMAILJS_USER! }
          );
          toast.success('Mensagem enviada com sucesso!');
        } catch (e) {
          toast.error('Erro ao enviar mensagem, tente novamente mais tarde!');
        }
      })}
    >
      <div className="grid grid-cols-2 gap-3.5">
        <input
          type="text"
          placeholder="Nome"
          className="rounded-2xl bg-primary-900 px-5 py-2.5"
          {...form.register('name', { required: true })}
        />
        <input
          type="text"
          placeholder="E-mail"
          className="rounded-2xl bg-primary-900 px-5 py-2.5"
          {...form.register('email', { required: true })}
        />
      </div>
      <textarea
        placeholder="Me conte mais sobre sua proposta"
        className="w-full resize-none rounded-2xl bg-primary-900 px-5 py-2.5"
        rows={6}
        {...form.register('description', { required: true })}
      />
      <button
        className="w-full rounded-2xl bg-primary-600 px-5 py-2.5 font-bold transition-all hover:bg-primary-700"
        type="submit"
      >
        Enviar
      </button>
      <Toaster
        position="bottom-right"
        toastOptions={{ className: '!bg-white/20 backdrop-blur-md !text-white/80' }}
      />
    </form>
  );
}
