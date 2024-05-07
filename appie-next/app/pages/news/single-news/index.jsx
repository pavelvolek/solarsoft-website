import React from 'react';
import SingleNews from "../../../src/components/News/SingleNews";
import PageHead from "../../../src/components/Helper/PageHead";

function Index() {
    return (
        <>
            <PageHead title="Appie | Single News"/>
            <SingleNews/>
        </>

    );
}

export default Index;