import { Avatar, Box, Heading, Link, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./TopCard.css";
import "./ascii-renderer.js";
import AsciiRenderer from "./ascii-renderer.js";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default function TopCard() {
  const myDiv = useRef(null);
  useEffect(() => {
    var container;

    var camera, scene, renderer;

    var asciiRenderer;

    var controls;

    var sphere;

    var texture =
      "data:image/jpeg;base64,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";
    var useOrthoCam = false;

    var start = Date.now();

    init();
    animate();

    function init() {
      container = myDiv.current;

      var width = container.clientWidth || 2;
      var height = container.clientWidth || 2;

      renderer = new THREE.WebGLRenderer({ alpha: true });

      var charSet =
        "0100011001101111011100100010000001000111011011110" +
        "1100100001000000111001101101111001000000110110001" +
        "1011110111011001100101011001000010000001110100011" +
        "0100001100101001000000111011101101111011100100110" +
        "1100011001000010000001110100011010000110000101110" +
        "1000010000001101000011001010010000001100111011000" +
        "0101110110011001010010000001101000011010010111001" +
        "1001000000110111101101110011001010010000001100001" +
        "0110111001100100001000000110111101101110011011000" +
        "1111001001000000101001101101111011011100010110000" +
        "1000000111010001101000011000010111010000100000011" +
        "1011101101000011011110110010101110110011001010111" +
        "0010001000000110001001100101011011000110100101100" +
        "1010111011001100101011100110010000001101001011011" +
        "1000100000011010000110100101101101001000000111001" +
        "1011010000110000101101100011011000010000001101110" +
        "0110111101110100001000000111000001100101011100100" +
        "1101001011100110110100000100000011000100111010101" +
        "1101000010000001101000011000010111011001100101001" +
        "0000001100101011101000110010101110010011011100110" +
        "0001011011000010000001101100011010010110011001100" +
        "10100100000";

      // This step is important, the renderer must have a parent
      container.appendChild(renderer.domElement);

      asciiRenderer = new AsciiRenderer(renderer, {
        charSet: charSet,
        fontSize: 18,
        opacity: 0.2,
      });

      if (useOrthoCam) {
        camera = new THREE.OrthographicCamera(
          width / -2,
          width / 2,
          height / 2,
          height / -2,
          1,
          1000
        );
      } else {
        camera = new THREE.PerspectiveCamera(25, width / height, 1, 1000);
      }
      camera.position.z = 600;

      scene = new THREE.Scene();

      var sunlight = new THREE.DirectionalLight(0xffffff, 1.5);
      sunlight.position.set(1, 1, 1);
      scene.add(sunlight);

      var sphereTex = new THREE.TextureLoader().load(texture);
      sphereTex.magFilter = THREE.NearestFilter;
      sphereTex.minFilter = THREE.NearestFilter;
      var sphereMat = new THREE.MeshToonMaterial({
        map: sphereTex,
        color: 0xffffff,
        shininess: 0,
        reflectivity: 0,
      });

      const geometry = new THREE.SphereBufferGeometry(100, 100, 100);

      sphere = new THREE.Mesh(geometry, sphereMat);
      scene.add(sphere);

      controls = new OrbitControls(camera, container);
      controls.enablePan = true;
      controls.enableZoom = false;
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.rotateSpeed = 0.3;
      controls.update();

      window.addEventListener("resize", onWindowResize, false);
      onWindowResize();
    }

    function onWindowResize() {
      var width = container.clientWidth;
      var height = container.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      asciiRenderer.setSize(width, height);
    }

    function animate() {
      requestAnimationFrame(animate);
      render();
    }

    function render() {
      var timer = Date.now() - start;
      sphere.rotation.y = timer * 0.0002;
      sphere.rotation.x = timer * -0.0001;
      controls.update();
      renderer.render(scene, camera);
    }
  }, [myDiv]);

  return (
    <Box>
      <Box
        className="text"
        top={{ base: 5, md: 10 }}
        left={{ base: 10, md: 10 }}
      >
        <Box className="contacts">
          <Link className={"contact"} href="#projects">
            <u>projects</u>
          </Link>
          ,{" "}
          <Link className={"contact"} href="#resume">
            <u>resume.pdf</u>
          </Link>
          ,{" "}
          <Link className={"contact"} href="#contact">
            <u>contact me</u>
          </Link>{" "}
        </Box>
        <Heading
          as="h1"
          className="noselect"
          fontSize={{ base: "5xl", sm: "6xl", md: "8xl" }}
          fontFamily={"mono"}
        >
          <Text mt={{ base: 5, sm: 10 }}>John Farrell</Text>
          <Box
            className="subtext"
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            fontFamily={"mono"}
          >
            SWE & ML, CS @ Brown
          </Box>
          <Box
            mt={5}
            fontSize={"md"}
            fontWeight={"medium"}
            p={"4"}
            bgColor={"rgba(0,0,0,0.75)"}
            rounded={"md"}
            width={{ base: "90%", sm: "70vw", md: "60vw", lg: "35vw" }}
            marginTop={{ base: "16", sm: undefined }}
            display={useWindowDimensions().height > 535 ? undefined : "none"}
          >
            <Avatar
              src={process.env.PUBLIC_URL + "/profile.jpeg"}
              border={"3px #aaaaaa solid"}
              size={"xl"}
              mb={"10"}
              float={"left"}
              m={0}
              mr={5}
            />{" "}
            <Text>
              I am a computer science student pursuing an ScB at Brown
              University. Strong proficiencies in both object-oriented and
              functional programming. Experience with independent and scaled web
              applications using frameworks, DBMS, and other
              systems/applications.
            </Text>
          </Box>
        </Heading>
      </Box>
      <Box
        className={"cover"}
        pointerEvents={{ base: "auto", md: "none" }}
        w={"100vw"}
        h={"50vh"}
      ></Box>
      <Box className="container" ref={myDiv} w={"100vw"} h={"100vh"}></Box>
    </Box>
  );
}
