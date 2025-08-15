'use client';

export default function ContactButton() {
  const handleContact = () => {
    const to = encodeURIComponent('Info@sopbcenters.com');
    const subject = encodeURIComponent('contact from website');
    const body = encodeURIComponent('Message from website');
    window.open(`mailto:${to}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <button
      type="button"
      onClick={handleContact}
      className="py-3 px-4 rounded-md hover:opacity-90 font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-opacity duration-200 font-medium font-krona-one"
      style={{
        backgroundColor: '#c5f381',
        color: '#43546E',
        fontWeight: 'bold',
        width: '150px'
      }}
    >
      Contact Us
    </button>
  );
} 