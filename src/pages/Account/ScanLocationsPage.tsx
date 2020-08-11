import React, { useState } from "react";

import {
  Box,
  Flex,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  PseudoBox,
  PseudoBoxProps,
  Stack,
  Text,
} from "@chakra-ui/core";

import ReactMapGL, { Marker, InteractiveMapProps } from "react-map-gl";
import { useDimensions, ViewportProvider } from "react-viewport-utils";

import AccountPageLayout from "./components/AccountPageLayout";

import { observable } from "mobx";
import { useObserver } from "mobx-react";
import moment from "moment";

import { ScanLocation } from "../../Models/ScanLocation";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoia2FjaGFuZyIsImEiOiJja2N3aTFqZjgwNGk5MnlteWdoZmVkdHloIn0.0m0MAYL8eeZNWyCZOvbP8g";
const DEFAULT_MAP_ZOOM = 15;

type LocationScanMapProps = {
  viewport: Partial<InteractiveMapProps>;
  scanLocations: ScanLocation[];
};

const ScanLocationMarker: React.FC<{ scanLocation: ScanLocation }> = ({
  scanLocation,
}) => {
  return useObserver(() => (
    <Marker latitude={scanLocation.latitude} longitude={scanLocation.longitude}>
      <Popover usePortal placement="top">
        <PopoverTrigger>
          <Icon
            name="location-fill"
            size="30px"
            color="petcode.yellow.400"
            cursor="pointer"
          />
        </PopoverTrigger>
        <PopoverContent zIndex={4}>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>
            <Text>
              Scanned{" "}
              {moment
                .duration(moment(scanLocation.date).diff(moment()))
                .humanize(true)}
            </Text>
          </PopoverHeader>
          <PopoverBody>
            <Text>
              <b>Location: </b> {scanLocation.nearestAddress}
            </Text>
            <Text>
              <b>Device Info: </b> {scanLocation.deviceInfo}
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Marker>
  ));
};

const LocationScanMap: React.FC<LocationScanMapProps> = ({
  viewport,
  scanLocations,
}) => {
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

  return useObserver(() => (
    // @ts-ignore
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
      mapStyle="mapbox://styles/kachang/ckdm8ilq82uko1iqfo9ge0be6"
      onViewportChange={(newViewport) => Object.assign(viewport, newViewport)}
    >
      {scanLocations.map((scanLocation, idx) => (
        <ScanLocationMarker key={idx} scanLocation={scanLocation} />
      ))}
    </ReactMapGL>
  ));
};

const LocationScanMapWithProvider: React.FC<LocationScanMapProps> = (props) => (
  <ViewportProvider>
    <LocationScanMap {...props} />
  </ViewportProvider>
);

const ScanLocationCard: React.FC<
  PseudoBoxProps & { scanLocation: ScanLocation }
> = ({ scanLocation, ...props }) => (
  <PseudoBox
    display="flex"
    flexDirection="row"
    alignItems="center"
    rounded="lg"
    backgroundColor="white"
    fontSize="xl"
    fontWeight="thin"
    paddingX={6}
    paddingY={4}
    cursor="pointer"
    _hover={{
      backgroundColor: "petcode.neutral.100",
    }}
    {...props}
  >
    <Text color="petcode.blue.400">{scanLocation.nearestAddress}</Text>
    <Box flexGrow={1} />
    <Text color="petcode.neutral.400" marginRight={2}>
      {moment(scanLocation.date).format("M/D/YY - LT")}
    </Text>
    <Icon name="location-fill" size="30px" color="petcode.yellow.400" />
  </PseudoBox>
);

const ScanLocationsSection = () => {
  const [scanLocations] = useState(() =>
    observable([
      {
        latitude: 37.3356424,
        longitude: -122.0505069,
        nearestAddress: "21370 Homestead Rd, Cupertino, CA 95014",
        date: "2020-08-09T14:00",
        deviceInfo: "iPhone / Safari",
      },
      {
        latitude: 37.3400556,
        longitude: -122.0502666,
        nearestAddress: "1628 South Mary Avenue, Sunnyvale, CA 94087",
        date: "2020-08-09T13:00",
        deviceInfo: "Android / Chrome",
      },
    ] as ScanLocation[])
  );
  const [mapViewport] = useState(() =>
    observable({
      width: "100%",
      height: 400,
      zoom: DEFAULT_MAP_ZOOM,
      latitude: scanLocations[0].latitude,
      longitude: scanLocations[0].longitude,
    })
  );

  return (
    <Flex
      direction="column"
      flexGrow={1}
      backgroundColor="petcode.neutral.200"
      padding={10}
    >
      <LocationScanMapWithProvider
        scanLocations={scanLocations}
        viewport={mapViewport}
      />
      <Text color="petcode.neutral.700" fontSize="3xl" marginY={3}>
        Scan Locations
      </Text>
      <Stack spacing={3}>
        {scanLocations.map((scanLocation, idx) => (
          <ScanLocationCard
            key={idx}
            scanLocation={scanLocation}
            onClick={() => {
              mapViewport.latitude = scanLocation.latitude;
              mapViewport.longitude = scanLocation.longitude;
              mapViewport.zoom = DEFAULT_MAP_ZOOM;
            }}
          />
        ))}
      </Stack>
    </Flex>
  );
};

const ScanLocationsPage = () => (
  <AccountPageLayout>
    <ScanLocationsSection />
  </AccountPageLayout>
);

export default ScanLocationsPage;
