import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import TabCart from './TabCart';

const TabProduct = () => {
    const [tabs, setTabs] = useState([])
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setTabs(data.products))
    }, [])
    const categories = ['Shoes', 'Clothes', 'Watches']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category) > -1 ? categories.indexOf(category) : 2;
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const shoes = tabs.filter(project => project.category === "Shoes");
    const cloth = tabs.filter(project => project.category === "Clothes");
    const watch = tabs.filter(project => project.category === "Watches");

    return (
        <div> 
            <h1 className='text-center text-xl py-5'>Category way make three tab </h1>
            <div>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="flex justify-center gap-2 py-5 text-lg font-serif cursor-pointer">
                        <Tab className="bg-teal-600 rounded pt-1 p-2 text-white border">Shoes</Tab>
                        <Tab className="bg-teal-600 rounded pt-1 p-2 text-white border">Cloths</Tab>
                        <Tab className="bg-teal-600 rounded pt-1 p-2 text-white border!">Watch</Tab>
                    </TabList>
                    <TabPanel>
                        <TabCart project={shoes}> </TabCart>
                    </TabPanel>
                    <TabPanel>
                        <TabCart project={cloth}> </TabCart>
                    </TabPanel>
                    <TabPanel>
                        <TabCart project={watch}> </TabCart>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default TabProduct;