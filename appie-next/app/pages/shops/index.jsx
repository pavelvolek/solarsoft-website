import React from 'react';
import Shops from "../../src/components/Shops";
import PageHead from "../../src/components/Helper/PageHead";

function Index() {
    return (
        <>
            <PageHead title="Appie | Shops"/>
            <Shops/>
        </>
    );
}

export default Index;