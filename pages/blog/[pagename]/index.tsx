import { useRouter } from "next/router"
import React from 'react';
const dynamic = () =>{
    const router = useRouter();
    const {pagename} = router.query;
    return (
        <div>a{pagename}</div>
    )
}

export default dynamic