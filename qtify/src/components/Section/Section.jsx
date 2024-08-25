import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import axios from "axios";
import Carousel from "../Carousel/Carousel";
import { Tab, Tabs } from "@mui/material";

const Section = ({sectionTitle, fetchUrl, toggleButton =true, tabs}) => {
    const [data, setData] = useState([]);
    const [carouselToggle, setCarouselToggle] = useState("Show All");
    const [value, setValue] = useState("All")
    const [filteredData, setFilteredData] = useState([]);

    const fetchAlbums = async () => {
        try {
            const response = await axios.get(fetchUrl);
            setData(response.data);
        } catch (error) {
            console.error(`Error fetching ${sectionTitle.toLowerCase()}:`, error);
        }
    };

    const handleCarouselToggle = () => {
        setCarouselToggle(prevState => (prevState === "Collapse" ? "Show All" : "Collapse"));
    };

    useEffect(() => {
        fetchAlbums();
    }, [fetchUrl]);

    useEffect(() => {
        if(value === "All") {
            setFilteredData(data);
        } else {
            const filtered = data.filter((item) => item.genre.key === value)
            setFilteredData(filtered)
        }
    }, [value, data])

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    if (!data) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.cardSection}>
            <div className={styles.cardsHeader}>
                <p className={styles.title}>{sectionTitle}</p>
                {
                    toggleButton === true && <button className={styles.carouselToggleButton} onClick={handleCarouselToggle}>{carouselToggle}</button>
                }
            </div>

            {
           toggleButton && carouselToggle === "Collapse"? (
            <div className={styles.cardsGrid}>
                {data.map(item => (
                    <Card key={item.id} albumData={item} />
                ))}
            </div>
                ) : (
                    <div>
                        {
                            tabs && sectionTitle === "Songs" && (                        <Tabs
                                value={value}
                                onChange={handleChange}
                                classes={{ root: styles.tabsRoot, indicator: styles.tabIndicator }}
                            >
                                <Tab className={styles.tab} value="All" label="All" />
                                {tabs.map((tab, i) => (
                                    <Tab key={i} className={styles.tab} value={tab.key} label={tab.key} />
                                ))}
                            </Tabs>)
                        }

                        <Carousel albumData = {sectionTitle === "Songs"? filteredData : data}/>
                    </div>
                )
            }
            </div>
    );
}


export default Section