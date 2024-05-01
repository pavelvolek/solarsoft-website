import React from 'react';
import News from "../../src/components/News";
import PageHead from "../../src/components/Helper/PageHead";

function Index() {
    return (
        <>
            <PageHead title="Appie | News"/>
            <News/>
        </>

    );
}

export default Index;