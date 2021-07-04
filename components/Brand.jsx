import React from 'react';
import { ReactComponent as Carrier } from 'vectors/carrier.svg';
import { ReactComponent as Daihatsu } from 'vectors/daihatsu.svg';
import { ReactComponent as Daikin } from 'vectors/daikin.svg';
import { ReactComponent as Fujitsu } from 'vectors/fujitsu.svg';
import { ReactComponent as General } from 'vectors/general.svg';
import { ReactComponent as Haier } from 'vectors/haier.svg';
import { ReactComponent as Hitachi } from 'vectors/hitachi.svg';
import { ReactComponent as LG } from 'vectors/lg.svg';
import { ReactComponent as Midea } from 'vectors/midea.svg';
import { ReactComponent as Mitsubishi } from 'vectors/mitsubishi.svg';
import { ReactComponent as Panasonic } from 'vectors/panasonic.svg';
import { ReactComponent as Samsung } from 'vectors/samsung.svg';
import { ReactComponent as Sanyo } from 'vectors/sanyo.svg';
import { ReactComponent as Sharp } from 'vectors/sharp.svg';

const Logo = ({ logo }) => {
    switch (logo) {
        case 'carrier':
            return <Carrier />;
        case 'daihatsu':
            return <Daihatsu />;
        case 'daikin':
            return <Daikin />;
        case 'fujitsu':
            return <Fujitsu />;
        case 'general':
            return <General />;
        case 'haier':
            return <Haier />;
        case 'hitachi':
            return <Hitachi />;
        case 'lg':
            return <LG />;
        case 'midea':
            return <Midea />;
        case 'mitsubishi':
            return <Mitsubishi />;
        case 'panasonic':
            return <Panasonic />;
        case 'samsung':
            return <Samsung />;
        case 'sanyo':
            return <Sanyo />;
        case 'sharp':
            return <Sharp />;
    
        default:
            return null;
    }
}

export const Brand = ({ brand }) => <div className="brands">
    <Logo logo={brand} className="brand-icon" />
</div>;