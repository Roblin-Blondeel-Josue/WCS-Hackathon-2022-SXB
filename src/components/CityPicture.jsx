import React, { useEffect, useState } from "react";
import axios from "axios";

function CityPicture({ city }) {
    const [img, setImg] = useState(
        "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzODMzMTh8MHwxfHNlYXJjaHwxfHxwYXJpc3xlbnwwfHx8fDE2NjkyOTUwODE&ixlib=rb-4.0.3&q=80"
    );

    // useEffect(() => {
    //     axios
    //         .get(
    //             `https://api.unsplash.com//search/photos?query=${city}&orientation=landscape&per_page=1&client_id=Y0ARhn_ULsZYMBKuqKRgGRen0RPKFSmo6Hq4T-mpTVE`
    //         )
    //         .then((res) => {
    //             console.log(res.data);
    //             console.log(res.data.results[0].urls.full);
    //             setImg(res.data.results[0].urls.full);
    //         });
    // }, [city]);

    return <img src={img} alt={city} />;
}

export default CityPicture;
