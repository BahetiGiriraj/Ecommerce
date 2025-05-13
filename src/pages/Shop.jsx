import React from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/Popular/Popular";
import Offers from "../components/Offers/Offers";
import NewCollection from "../components/NewCollection/NewCollection";

export default function Shop(){
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollection/>
        </div>
    )
}