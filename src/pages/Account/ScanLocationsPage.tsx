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

import AccountPageLayout from "../../components/Shared/layouts/AccountPageLayout";

import moment from "moment";

import { ScanLocation } from "../../Models/ScanLocation";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoia2FjaGFuZyIsImEiOiJja2N3aTFqZjgwNGk5MnlteWdoZmVkdHloIn0.0m0MAYL8eeZNWyCZOvbP8g";
const DEFAULT_MAP_ZOOM = 15;

type LocationScanMapProps = {
  viewport: InteractiveMapProps;
  setViewport: (viewport: InteractiveMapProps) => void;
  scanLocations: ScanLocation[];
};

const ScanLocationMarker: React.FC<{ scanLocation: ScanLocation }> = ({
  scanLocation,
}) => {
  return (
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
  )
};

const LocationScanMap: React.FC<LocationScanMapProps> = ({
  viewport,
  setViewport,
  scanLocations,
}) => {
  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onViewportChange={(newViewport) =>
        setViewport({
          ...viewport,
          ...newViewport,
          width: "100%",
        })
      }
    >
      {scanLocations.map((scanLocation, idx) => (
        <ScanLocationMarker key={idx} scanLocation={scanLocation} />
      ))}
    </ReactMapGL>
  );
};

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
      backgroundColor: "petcode.neutral.200",
    }}
    boxShadow="0px 4px 20px rgba(0, 0, 0, 0.05)"
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
  const [scanLocations] = useState(
    () =>
      [
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
      ] as ScanLocation[]
  );
  const [mapViewport, setMapViewport] = useState<InteractiveMapProps>({
    width: "100%",
    height: 400,
    zoom: DEFAULT_MAP_ZOOM,
    latitude: scanLocations[0].latitude,
    longitude: scanLocations[0].longitude,
  });

  return (
    <Flex direction="column" flexGrow={1} paddingX={10} zIndex={1}>
      <LocationScanMap
        scanLocations={scanLocations}
        viewport={mapViewport}
        setViewport={setMapViewport}
      />
      <Text color="petcode.neutral.700" fontSize="3xl" marginY={3}>
        Scan Locations
      </Text>
      <Stack spacing={3}>
        {scanLocations.map((scanLocation, idx) => (
          <ScanLocationCard
            key={idx}
            scanLocation={scanLocation}
            marginLeft={3}
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
