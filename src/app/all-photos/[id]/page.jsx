

const photoDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch("https://pixgen-m8.vercel.app/data.json");
    const data = await res.json();
    const photo = data.find(p => p.id == id);
    console.log(photo);
    return (
        <div>
            <h1>{photo.title}</h1>
            <p>{photo.prompt}</p>
        </div>
    );
};

export default photoDetailsPage;