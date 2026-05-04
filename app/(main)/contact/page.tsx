const CONTACTS = [
  { label: 'Email', value: '...................@gmail.com', href: '' },
  { label: 'FACEBOOK', value: 'https://www.facebook.com/an.tranvohong.5', href: 'https://www.facebook.com/an.tranvohong.5', isLink: true },
  { label: 'PHONE', value: '0*..................1', href: '' },
];

function ContactItem({ label, value, href, isLink }: typeof CONTACTS[0] & { isLink?: boolean }) {
  const content = isLink ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-lg text-white font-semibold hover:underline">
      {value}
    </a>
  ) : (
    <p className="text-lg text-white font-semibold">{value}</p>
  );
  
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-4">{label}:</h2>
      {content}
      {label !== 'PHONE' && <div className="border-b-2 border-gray-700 mt-4" />}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-12">CONTACT</h1>
        <div className="bg-yellow-400 p-8 flex gap-8 items-center rounded-2xl">
          <img src="/logo.png" alt="Contact" className="flex-shrink-0 w-64 h-80 rounded-lg object-cover shadow-lg" />
          <div className="flex-1 space-y-8">
            {CONTACTS.map((contact) => <ContactItem key={contact.label} {...contact} />)}
          </div>
        </div>
        <div className="mt-12 border-t-2 border-gray-600" />
      </div>
    </div>
  );
}
