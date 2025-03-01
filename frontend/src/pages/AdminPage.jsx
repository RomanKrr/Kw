import React, { useState } from 'react'
import CreateProductForm from '../components/CreateProductForm/CreateProductForm';
import ProductsList from '../components/ProductsList/ProductsList';

import "../pageStyles/AdminPage.css"
import CreateGalleryImg from '../components/CreateGalleryImg/CreateGalleryImg';
import OrderList from '../components/OrderList/OrderList';
import Edit from '../components/Edit/Edit';

const tabs = [
    { id: "create", label: "Create Product" },
    { id: "products", label: "Products" },
    { id: "createGallery", label: "Gallery" },
    { id: "orders", label: "Orders" },
    { id: "edit", label: "Edit" },
    // { id: "analytics", label: "Analytics" },
];

const AdminPage = () => {
    const [activeTab, setActiveTab] = useState("create");

    return (
        <section>
            <div className="admin_container">
                <div className="admin_header">
                    <nav>
                        <ul className='admin_nav_container'>
                            {tabs.map((tab) => (
                                <li
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={activeTab === tab.id ? "active_tab" : ""}
                                >
                                    {tab.label}
                                </li>

                            ))}
                        </ul>
                    </nav>
                </div>
                {activeTab === "create" && <CreateProductForm />}
                {activeTab === "products" && <ProductsList />}
                {activeTab === "createGallery" && <CreateGalleryImg />}
                {activeTab === "orders" && <OrderList />}
                {activeTab === "edit" && <Edit />}
                {/* {activeTab === "analytics" && <AnalyticsTab />} */}
            </div>
        </section>
    )
}

export default AdminPage