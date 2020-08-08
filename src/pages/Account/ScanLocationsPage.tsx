import React, { useState } from 'react';

import { Box, Flex, Text, Icon } from '@chakra-ui/core';

import ReactMapGL, { Marker } from 'react-map-gl';
import { useDimensions, ViewportProvider } from 'react-viewport-utils';

import AccountPageLayout from './components/AccountPageLayout';

import { observable } from 'mobx';
import moment from 'moment';

import { ScanLocation } from '../../Models/ScanLocation';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoia2FjaGFuZyIsImEiOiJja2N3aTFqZjgwNGk5MnlteWdoZmVkdHloIn0.0m0MAYL8eeZNWyCZOvbP8g';

type LocationScanMapProps = {
    scanLocations: ScanLocation[];
};

const LocationScanMap: React.FC<LocationScanMapProps> = ({ scanLocations }) => {
    const [viewport, setViewport] = useState({
        width: '100%',
        height: 400,
        zoom: 15,
        latitude: 37.336869581091925,
        longitude: -122.04834927804099
    });

    const [lastWidth, setLastWidth] = useState(0);
    const dimensions = useDimensions({
        deferUpdateUntilIdle: true,
        disableScrollUpdates: true,
    });
    if (lastWidth !== dimensions.width) {
        setTimeout(() => {
            setLastWidth(dimensions.width);
        }, 0);
    }

    return (
        <ReactMapGL
            { ...viewport }
            mapboxApiAccessToken={ MAPBOX_TOKEN }
            mapStyle='mapbox://styles/kachang/ckdm8ilq82uko1iqfo9ge0be6'
            // @ts-ignore
            onViewportChange={ setViewport }
        >
            { scanLocations.map((scanLocation, idx) => (
                <Marker key={ idx } latitude={ scanLocation.latitude } longitude={ scanLocation.longitude }>
                    <Icon name='location-fill' size='30px' color='petcode.yellow.400'/>
                </Marker>
            )) }
        </ReactMapGL>
    );
};

const LocationScanMapWithProvider: React.FC<LocationScanMapProps> = (props) => (
    <ViewportProvider>
        <LocationScanMap { ...props }/>
    </ViewportProvider>
);

const ScanLocationCard: React.FC<{ scanLocation: ScanLocation }> = ({ scanLocation }) => (
    <Flex
        direction='row'
        alignItems='center'
        rounded='lg'
        backgroundColor='white'
        fontSize='xl'
        fontWeight='thin'
        paddingX={6}
        paddingY={4}
        marginTop={3}
    >
        <Text color='petcode.blue.400'>
            { scanLocation.nearestAddress }
        </Text>
        <Box flexGrow={1}/>
        <Text color='petcode.neutral.400' marginRight={2}>
            { moment(scanLocation.date).format('M/D/YY') }
        </Text>
        <Icon name='location-fill' size='30px' color='petcode.yellow.400'/>
    </Flex>
);

const ScanLocationsSection = () => {
    const [scanLocations] = useState(observable([
        { latitude: 37.3356424, longitude: -122.0505069, nearestAddress: '21370 Homestead Rd, Cupertino, CA 95014', date:'2020-06-01' },
        { latitude: 37.3356424, longitude: -122.0505069, nearestAddress: '21370 Homestead Rd, Cupertino, CA 95014', date:'2020-06-01' },
        { latitude: 37.3356424, longitude: -122.0505069, nearestAddress: '21370 Homestead Rd, Cupertino, CA 95014', date:'2020-06-01' },
        { latitude: 37.3356424, longitude: -122.0505069, nearestAddress: '21370 Homestead Rd, Cupertino, CA 95014', date:'2020-06-01' },
        { latitude: 37.3356424, longitude: -122.0505069, nearestAddress: '21370 Homestead Rd, Cupertino, CA 95014', date:'2020-06-01' }
    ] as ScanLocation[]));

    return (
        <Flex direction='column' flexGrow={1} backgroundColor='petcode.neutral.200' padding={10}>
            <LocationScanMapWithProvider scanLocations={ scanLocations }/>
            <Text color='petcode.neutral.700' fontSize='3xl' marginTop={3}>
                Scan Locations
            </Text>
            {
                scanLocations.map((scanLocation, idx) => (
                    <ScanLocationCard key={ idx } scanLocation={ scanLocation }/>
                ))
            }
        </Flex>
    );
};

const ScanLocationsPage = () => (
    <AccountPageLayout>
       <ScanLocationsSection/> 
    </AccountPageLayout>
);

export default ScanLocationsPage;
