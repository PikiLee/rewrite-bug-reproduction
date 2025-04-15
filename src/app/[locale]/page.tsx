export default function HomePage() {
  return (
    <div>
      homepage
    </div>
  );
}

export const generateStaticParams = async () => {
    return [
        {
            locale: 'en',
        },
        {
            locale: 'de',
        },
    ];
};