import PhotoCard from "./PhotoCard";

const TopGenerations = async() => {

    const res = await fetch("https://pixgen-m8.vercel.app/data.json");
    const data = await res.json();
    const topData = data.slice(0,8);
    console.log(topData);

    return (
        <div className="max-w-[1400px] mx-auto grid grid-cols-4 gap-5 mt-[60px]">
            {
                topData.map(photo=> <PhotoCard key = {photo.id} photo={photo}></PhotoCard> )
            }
            
        </div>
    );
};

export default TopGenerations;