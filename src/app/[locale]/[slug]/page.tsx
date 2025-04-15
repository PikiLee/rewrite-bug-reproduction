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
            slug: 'real-about',
        },
    ];
};