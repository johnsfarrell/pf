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
      "https://static.vecteezy.com/system/resources/previews/007/852/355/non_2x/dynamic-gradient-wavy-fluid-seamless-backdrop-modern-abstract-liquid-repeating-background-holographic-color-mix-tileable-texture-vector.jpg";
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
      camera.position.z = 250;

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

      const geometry = new THREE.TorusKnotBufferGeometry(100, 25, 100);

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
