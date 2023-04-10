import React, { FC } from 'react';
import { Container } from '../UI/Container';
import Navigation from '../Navigation';
import ImageGallery from 'react-image-gallery';
import Dropdown from 'react-dropdown';
import like from '../../assets/images/like.svg';
import { ADD_TO_FAVORITES, HOW_SIZE, RUB, SIZE, TO_CART } from '../../constants/constants';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import styles from './styles.module.scss';

type SizeArray = {
    item: string;
    available: boolean;
};

type ItemsArray = {
    originalAlt: string;
    thumbnailAlt: string;
    original: string;
    thumbnail: string;
};

type BenefitsArray = {
    alt: string;
    image: string;
};

type Props = {
    title?: string;
    price?: number;
    description?: string;
    subDescription?: string;
    size: Array<SizeArray>;
    items: Array<ItemsArray>;
    benefits: Array<BenefitsArray>;
};

const Card: FC<Props> = ({ title, price, description, subDescription, size, items, benefits }) => {
    const matches = useMediaQuery('(min-width: 768px)');

    const renderItemBenefits = () => {
        return benefits.map((item, key: number) => <img key={key} src={item.image} alt={item.alt} />);
    };

    const selectSize = () => {
        const sizeFilter = size.filter((item) => item.available);
        return sizeFilter.map((item) => SIZE + item.item);
    };

    const renderSize = () => {
        return size.map((item, key: number) => (
            <div className={`${styles.card__descr__sizeItem} ${!item.available ? styles.none : ''}`} key={key}>
                {item.item}
            </div>
        ));
    };

    return (
        <section>
            <Container>
                <Navigation />
                <div className={styles.card}>
                    <div className={styles.card__left}>
                        {matches && (
                            <>
                                <div className={styles.card__benefits}>
                                    {benefits && benefits.length > 0 && renderItemBenefits()}
                                </div>
                                <ImageGallery
                                    items={items}
                                    showNav={false}
                                    showFullscreenButton={false}
                                    showPlayButton={false}
                                    slideOnThumbnailOver={true}
                                    disableThumbnailScroll={true}
                                />
                            </>
                        )}
                    </div>
                    <div className={styles.card__descr}>
                        <h1 className={styles.card__descr__title}>{title}</h1>
                        <div className={styles.card__descr__price}>
                            {price?.toLocaleString()} {RUB}
                        </div>
                        <div className={styles.card__descr__revert}>
                            <div className={styles.card__descr__select}>
                                <Dropdown
                                    options={selectSize()}
                                    value={selectSize()[0]}
                                    arrowClosed={<span className={styles.arrow_up} />}
                                    arrowOpen={<span className={styles.arrow_down} />}
                                />

                                <button className={styles.card__descr__cart}>{TO_CART}</button>
                                <button className={styles.card__descr__like}>
                                    <img src={like} alt={ADD_TO_FAVORITES} />
                                </button>
                            </div>
                            <div className={styles.card__descr__size}>
                                {renderSize()}
                                <a href="/">{HOW_SIZE}</a>
                            </div>
                        </div>
                        {!matches && (
                            <ImageGallery
                                items={items}
                                showNav={false}
                                showFullscreenButton={false}
                                showPlayButton={false}
                                slideOnThumbnailOver={true}
                                disableThumbnailScroll={true}
                                showBullets={true}
                                showThumbnails={false}
                            />
                        )}
                        <div className={styles.card__descr__text}>
                            <p>{description}</p>
                            <p>{subDescription}</p>
                        </div>
                        <div className={styles.card__descr__benefits}>
                            {benefits && benefits.length > 0 && renderItemBenefits()}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Card;
