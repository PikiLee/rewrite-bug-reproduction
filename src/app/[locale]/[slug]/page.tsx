export default async function HomePage({params}: {params: Promise<{slug: string}>} ) {
  const {slug} = await params;
  return (
    <div>
        <p>{slug}</p>
    </div>
  );
}

export const generateStaticParams = async () => {
    return [
        {
            locale: 'en',
            slug: 'real-about',
        },
        {
            locale: 'de',
            slug: 'real-about',
        },
    ];
};