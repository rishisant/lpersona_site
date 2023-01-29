import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './res/img/logo_.png';

import './Base.css';

var ss_total = 0;
var qa_total = 0;
var cal_total = 0;
var lin_total = 0;
var pas_total = 0;
var cac_total = 0;
var cam_total = 0;
var bad_total = 0;
var question_count = 0;

// Champion Array to Determine Scores
const champArray = [
    {
        name: "Aatrox",
        ss: 0,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Ahri",
        ss: 0,
        qa: 4,
        cal: 8,
        lin: 3,
        pas: 1,
        cac: 5,
        cam: 6,
        bad: 2
    },
    {
        name: "Akali",
        ss: 0,
        qa: 8,
        cal: 7,
        lin: 3,
        pas: 1,
        cac: 5,
        cam: 6,
        bad: 2
    },
    {
        name: "Alistar",
        ss: 2,
        qa: 4,
        cal: 5,
        lin: 3,
        pas: 8,
        cac: 5,
        cam: 2,
        bad: 1
    },
    {
        name: "Amumu",
        ss: 8,
        qa: 2,
        cal: 5,
        lin: 3,
        pas: 6,
        cac: 0,
        cam: 4,
        bad: 3
    },
    {
        name: "Annie",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 8,
        cam: 5,
        bad: 2
    },
    {
        name: "Azir",
        ss: 0,
        qa: 4,
        cal: 8,
        lin: 3,
        pas: 1,
        cac: 5,
        cam: 6,
        bad: 2
    },
    {
        name: "Bard",
        ss: 2,
        qa: 3,
        cal: 5,
        lin: 4,
        pas: 6,
        cac: 8,
        cam: 4,
        bad: 1
    },
    {
        name: "Blitzcrank",
        ss: 3,
        qa: 6,
        cal: 5,
        lin: 4,
        pas: 8,
        cac: 2,
        cam: 4,
        bad: 1
    },
    {
        name: "Braum",
        ss: 5,
        qa: 4,
        cal: 6,
        lin: 3,
        pas: 8,
        cac: 2,
        cam: 1,
        bad: 3
    },
    {
        name: "Camille",
        ss: 0,
        qa: 8,
        cal: 6,
        lin: 3,
        pas: 2,
        cac: 4,
        cam: 5,
        bad: 5
    },
    {
        name: "Cho'Gath",
        ss: 8,
        qa: 2,
        cal: 6,
        lin: 4,
        pas: 5,
        cac: 0,
        cam: 3,
        bad: 1
    },
    {
        name: "Corki",
        ss: 2,
        qa: 4,
        cal: 6,
        lin: 8,
        pas: 3,
        cac: 5,
        cam: 1,
        bad: 0
    },
    {
        name: "Darius",
        ss: 1,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Dr. Mundo",
        ss: 2,
        qa: 5,
        cal: 6,
        lin: 8,
        pas: 3,
        cac: 1,
        cam: 4,
        bad: 0
    },
    {
        name: "Ekko",
        ss: 1,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Evelynn",
        ss: 0,
        qa: 5,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 4,
        cam: 8,
        bad: 3
    },
    {
        name: "Fiddlesticks",
        ss: 3,
        qa: 4,
        cal: 6,
        lin: 5,
        pas: 2,
        cac: 8,
        cam: 1,
        bad: 0
    },
    {
        name: "Fiora",
        ss: 0,
        qa: 8,
        cal: 5,
        lin: 3,
        pas: 2,
        cac: 4,
        cam: 6,
        bad: 7
    },
    {
        name: "Fizz",
        ss: 0,
        qa: 5,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 4,
        cam: 8,
        bad: 3
    },
    {
        name: "Galio",
        ss: 8,
        qa: 2,
        cal: 6,
        lin: 4,
        pas: 5,
        cac: 0,
        cam: 3,
        bad: 1
    },
    {
        name: "Garen",
        ss: 3,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 1,
        bad: 7
    },
    {
        name: "Gragas",
        ss: 2,
        qa: 6,
        cal: 5,
        lin: 8,
        pas: 3,
        cac: 1,
        cam: 4,
        bad: 0
    },
    {
        name: "Graves",
        ss: 2,
        qa: 4,
        cal: 6,
        lin: 8,
        pas: 3,
        cac: 5,
        cam: 1,
        bad: 0
    },
    {
        name: "Heimerdinger",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Illaoi",
        ss: 1,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Irelia",
        ss: 0,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Janna",
        ss: 2,
        qa: 3,
        cal: 5,
        lin: 4,
        pas: 6,
        cac: 8,
        cam: 4,
        bad: 1
    },
    {
        name: "Jarvan IV",
        ss: 3,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 1,
        bad: 7
    },
    {
        name: "Jax",
        ss: 1,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Jayce",
        ss: 0,
        qa: 6,
        cal: 5,
        lin: 8,
        pas: 3,
        cac: 1,
        cam: 4,
        bad: 2
    },
    {
        name: "Jhin",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Jinx",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Kai'Sa",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Kalista",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Karma",
        ss: 2,
        qa: 3,
        cal: 5,
        lin: 4,
        pas: 6,
        cac: 8,
        cam: 4,
        bad: 1
    },
    {
        name: "Karthus",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Kassadin",
        ss: 1,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Katarina",
        ss: 0,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Kayle",
        ss: 2,
        qa: 3,
        cal: 5,
        lin: 4,
        pas: 6,
        cac: 8,
        cam: 4,
        bad: 1
    },
    {
        name: "Kennen",
        ss: 0,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Kha'Zix",
        ss: 1,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Kindred",
        ss: 2,
        qa: 3,
        cal: 5,
        lin: 4,
        pas: 6,
        cac: 8,
        cam: 4,
        bad: 1
    },
    {
        name: "Kled",
        ss: 1,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Kog'Maw",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "LeBlanc",
        ss: 0,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Lee Sin",
        ss: 3,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 1,
        bad: 7
    },
    {
        name: "Leona",
        ss: 2,
        qa: 3,
        cal: 5,
        lin: 4,
        pas: 6,
        cac: 8,
        cam: 4,
        bad: 1
    },
    {
        name: "Lissandra",
        ss: 1,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Lucian",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Lulu",
        ss: 2,
        qa: 3,
        cal: 5,
        lin: 4,
        pas: 6,
        cac: 8,
        cam: 4,
        bad: 1
    },
    {
        name: "Lux",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Malphite",
        ss: 1,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Malzahar",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Maokai",
        ss: 2,
        qa: 3,
        cal: 5,
        lin: 4,
        pas: 6,
        cac: 8,
        cam: 4,
        bad: 1
    },
    {
        name: "Master Yi",
        ss: 3,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 1,
        bad: 7
    },
    {
        name: "Miss Fortune",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Mordekaiser",
        ss: 1,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Morgana",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Nami",
        ss: 2,
        qa: 3,
        cal: 5,
        lin: 4,
        pas: 6,
        cac: 8,
        cam: 4,
        bad: 1
    },
    {
        name: "Nasus",
        ss: 10,
        qa: 4,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Nautilus",
        ss: 1,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Nidalee",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Nocturne",
        ss: 3,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 1,
        bad: 7
    },
    {
        name: "Nunu",
        ss: 2,
        qa: 3,
        cal: 5,
        lin: 4,
        pas: 6,
        cac: 8,
        cam: 4,
        bad: 1
    },
    {
        name: "Olaf",
        ss: 3,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 1,
        bad: 7
    },
    {
        name: "Orianna",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Pantheon",
        ss: 1,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Poppy",
        ss: 2,
        qa: 3,
        cal: 5,
        lin: 4,
        pas: 6,
        cac: 8,
        cam: 4,
        bad: 1
    },
    {
        name: "Quinn",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Rakan",
        ss: 2,
        qa: 3,
        cal: 5,
        lin: 4,
        pas: 6,
        cac: 8,
        cam: 4,
        bad: 1
    },
    {
        name: "Rammus",
        ss: 1,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Rek'Sai",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Renekton",
        ss: 1,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Rengar",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Riven",
        ss: 3,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 1,
        bad: 7
    },
    {
        name: "Rumble",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Ryze",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Sejuani",
        ss: 2,
        qa: 3,
        cal: 5,
        lin: 4,
        pas: 6,
        cac: 8,
        cam: 4,
        bad: 1
    },
    {
        name: "Shaco",
        ss: 1,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 3,
        bad: 5
    },
    {
        name: "Shen",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Shyvana",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Singed",
        ss: 2,
        qa: 3,
        cal: 5,
        lin: 4,
        pas: 6,
        cac: 8,
        cam: 4,
        bad: 1
    },
    {
        name: "Sion",
        ss: 3,
        qa: 8,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 1,
        bad: 7
    },
    {
        name: "Sivir",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Skarner",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Sona",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Soraka",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Swain",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Syndra",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Tahm Kench",
        ss: 2,
        qa: 3,
        cal: 5,
        lin: 4,
        pas: 6,
        cac: 8,
        cam: 4,
        bad: 1
    },
    {
        name: "Taliyah",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Talon",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Taric",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Teemo",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Thresh",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Tristana",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Trundle",
        ss: 3,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Tryndamere",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Twisted Fate",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Twitch",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Udyr",
        ss: 2,
        qa: 3,
        cal: 5,
        lin: 4,
        pas: 6,
        cac: 8,
        cam: 4,
        bad: 1
    },
    {
        name: "Urgot",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Varus",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Vayne",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Veigar",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Vel'Koz",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Vi",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Viktor",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Vladimir",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Volibear",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Warwick",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Xayah",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Xerath",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Xin Zhao",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Yasuo",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Yorick",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Zac",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Zed",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Ziggs",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Zilean",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    },
    {
        name: "Zyra",
        ss: 0,
        qa: 3,
        cal: 6,
        lin: 4,
        pas: 2,
        cac: 5,
        cam: 8,
        bad: 2
    }
];


// question array to store the questions, and answers with each answer having a ss,qa,cal,linc,pas,cac,cam,bad value associated with it
var questions = [
    {
        q: "How do you handle criticism?",
        a: [
            {
                ans: "I take it to heart and try to improve.",
                ss: 9,
                qa: 3,
                cal: 5,
                lin: 2,
                pas: 7,
                cac: 7,
                cam: 1,
                bad: 3
            },
            {
                ans: "I brush it off and move on.",
                ss: 2,
                qa: 6,
                cal: 3,
                lin: 5,
                pas: 5,
                cac: 2,
                cam: 6,
                bad: 8
            },
            {
                ans: "I become defensive and argue my point.",
                ss: 0,
                qa: 8,
                cal: 4,
                lin: 1,
                pas: 2,
                cac: 3,
                cam: 5,
                bad: 7
            },
            {
                ans: "I take it as a learning opportunity and try to grow.",
                ss: 7,
                qa: 4,
                cal: 8,
                lin: 3,
                pas: 6,
                cac: 6,
                cam: 2,
                bad: 5
            }
        ]
    },
    {
        q: "How do you handle difficult conversations?",
        a: [
            {
                ans: "I try to talk it out.",
                ss: 7,
                qa: 4,
                cal: 6,
                lin: 5,
                pas: 7,
                cac: 8,
                cam: 3,
                bad: 5
            },
            {
                ans: "I use humor to lighten the mood.",
                ss: 2,
                qa: 5,
                cal: 3,
                lin: 8,
                pas: 4,
                cac: 9,
                cam: 7,
                bad: 4
            },
            {
                ans: "I remain calm and try to find a solution.",
                ss: 8,
                qa: 5,
                cal: 9,
                lin: 4,
                pas: 7,
                cac: 5,
                cam: 2,
                bad: 5
            },
            {
                ans: "I stand up for those who need help.",
                ss: 6,
                qa: 9,
                cal: 5,
                lin: 2,
                pas: 8,
                cac: 6,
                cam: 3,
                bad: 8
            }
        ]
    },
    {
        q: "How do you feel about manipulation?",
        a: [
            {
                ans: "It makes me uncomfortable.",
                ss: 8,
                qa: 4,
                cal: 5,
                lin: 6,
                pas: 9,
                cac: 7,
                cam: 1,
                bad: 4
            },
            {
                ans: "I'm okay with it as long as it doesn't hurt anyone.",
                ss: 5,
                qa: 3,
                cal: 4,
                lin: 5,
                pas: 7,
                cac: 5,
                cam: 4,
                bad: 4,
            },
            {
                ans: "I enjoy it when it works in my favor.",
                ss: 3,
                qa: 5,
                cal: 6,
                lin: 4,
                pas: 2,
                cac: 4,
                cam: 8,
                bad: 5,
            },
            {
                ans: "I love coming up with sneaky plans.",
                ss: 1,
                qa: 5,
                cal: 7,
                lin: 3,
                pas: 2,
                cac: 2,
                cam: 10,
                bad: 3,
            }
        ]
    },
    {
        q: "Do you prefer to work alone or with a team?",
        a: [
            {
                ans: "Alone",
                ss: 7,
                qa: 4,
                cal: 6,
                lin: 9,
                pas: 2,
                cac: 3,
                cam: 6,
                bad: 5
            },
            {
                ans: "With a team",
                ss: 5,
                qa: 7,
                cal: 5,
                lin: 3,
                pas: 9,
                cac: 8,
                cam: 4,
                bad: 7
            },
            {
                ans: "It depends on the situation",
                ss: 6,
                qa: 6,
                cal: 8,
                lin: 6,
                pas: 7,
                cac: 7,
                cam: 6,
                bad: 6
            },
            {
                ans: "I do, only if I lead the team",
                ss: 3,
                qa: 8,
                cal: 7,
                lin: 4,
                pas: 5,
                cac: 5,
                cam: 7,
                bad: 9
            }
        ]
    },
    {
        q: "Which of the following ways would your friend describe you?",
        a: [
            {
                ans: "Dependable and loyal.",
                ss: 9,
                qa: 3,
                cal: 6,
                lin: 5,
                pas: 8,
                cac: 7,
                cam: 2,
                bad: 4
            },
            {
                ans: "Bold and daring.",
                ss: 3,
                qa: 9,
                cal: 5,
                lin: 2,
                pas: 5,
                cac: 4,
                cam: 5,
                bad: 9
            },
            {
                ans: "Clever and witty.",
                ss: 4,
                qa: 6,
                cal: 8,
                lin: 7,
                pas: 5,
                cac: 8,
                cam: 9,
                bad: 5
            },
            {
                ans: "Protective and supportive.",
                ss: 7,
                qa: 5,
                cal: 5,
                lin: 5,
                pas: 9,
                cac: 8,
                cam: 4,
                bad: 7
            }
        ]
    },
    {
        q: "When interacting with strangers, are you typically:",
        a: [
            {
                ans: "Open and friendly.",
                ss: 5,
                qa: 4,
                cal: 6,
                lin: 4,
                pas: 6,
                cac: 9,
                cam: 5,
                bad: 7
            },
            {
                ans: "Inquisitive and observant.",
                ss: 7,
                qa: 5,
                cal: 8,
                lin: 6,
                pas: 4,
                cac: 5,
                cam: 7,
                bad: 5
            },
            {
                ans: "Playful and cheerful.",
                ss: 3,
                qa: 4,
                cal: 5,
                lin: 4,
                pas: 4,
                cac: 9,
                cam: 6,
                bad: 6
            },
            {
                ans: "Reserved and analytical.",
                ss: 8,
                qa: 2,
                cal: 9,
                lin: 8,
                pas: 5,
                cac: 3,
                cam: 4,
                bad: 3
            }
        ]
    },
    {
        q: "When it comes to taking risks, I am usually:",
        a: [
            {
                ans: "Cautious and calculated.",
                ss: 9,
                qa: 2,
                cal: 8,
                lin: 6,
                pas: 7,
                cac: 6,
                cam: 4,
                bad: 4
            },
            {
                ans: "Fearless and confident.",
                ss: 3,
                qa: 9,
                cal: 5,
                lin: 4,
                pas: 4,
                cac: 5,
                cam: 7,
                bad: 9
            },
            {
                ans: "Resourceful and creative.",
                ss: 5,
                qa: 6,
                cal: 8,
                lin: 8,
                pas: 5,
                cac: 7,
                cam: 7,
                bad: 6
            },
            {
                ans: "Careful and considerate.",
                ss: 8,
                qa: 4,
                cal: 6,
                lin: 7,
                pas: 9,
                cac: 8,
                cam: 4,
                bad: 5
            }
        ]
    },
    {
        q: "When making a decision, I am usually:",
        a: [
            {
                ans: "Logical and rational.",
                ss: 8,
                qa: 2,
                cal: 9,
                lin: 8,
                pas: 5,
                cac: 4,
                cam: 4,
                bad: 4
            },
            {
                ans: "Energetic and passionate.",
                ss: 4,
                qa: 8,
                cal: 5,
                lin: 4,
                pas: 4,
                cac: 5,
                cam: 7,
                bad: 9
            },
            {
                ans: "Creative and imaginative.",
                ss: 5,
                qa: 6,
                cal: 8,
                lin: 7,
                pas: 5,
                cac: 8,
                cam: 5,
                bad: 6
            },
            {
                ans: "Patient and thorough.",
                ss: 9,
                qa: 4,
                cal: 7,
                lin: 6,
                pas: 9,
                cac: 8,
                cam: 4,
                bad: 5
            }
        ]
    },
    {
        q: "When I am bored, I am usually:",
        a: [
            {
                ans: "Curious and imaginative.",
                ss: 5,
                qa: 6,
                cal: 8,
                lin: 7,
                pas: 5,
                cac: 8,
                cam: 5,
                bad: 6
            },
            {
                ans: "Calm and relaxed.",
                ss: 8,
                qa: 4,
                cal: 7,
                lin: 6,
                pas: 9,
                cac: 8,
                cam: 4,
                bad: 5
            },
            {
                ans: "Energetic and active.",
                ss: 4,
                qa: 8,
                cal: 5,
                lin: 4,
                pas: 4,
                cac: 5,
                cam: 7,
                bad: 9
            },
            {
                ans: "Analytical and methodical.",
                ss: 9,
                qa: 2,
                cal: 9,
                lin: 8,
                pas: 5,
                cac: 4,
                cam: 4,
                bad: 4
    }
        ]
    },
    {
        q: "When interacting with others, I prefer to:",
        a: [
            {
                ans: "Be the center of attention.",
                ss: 4,
                qa: 8,
                cal: 5,
                lin: 4,
                pas: 4,
                cac: 5,
                cam: 7,
                bad: 9
            },
            {
                ans: "Be the first to try new things.",
                ss: 3,
                qa: 9,
                cal: 5,
                lin: 4,
                pas: 4,
                cac: 5,
                cam: 7,
                bad: 9
            },
            {
                ans: "Be the one to initiate conversation.",
                ss: 5,
                qa: 6,
                cal: 8,
                lin: 7,
                pas: 5,
                cac: 8,
                cam: 5,
                bad: 6
            },
            {
                ans: "Be the one to listen and understand.",
                ss: 8,
                qa: 2,
                cal: 7,
                lin: 6,
                pas: 10,
                cac: 6,
                cam: 2,
                bad: 2
            }
        ]
    },
    {
        q: "When I am in a group, I am usually the:",
        a: [
            {
                ans: "Leader.",
                ss: 4,
                qa: 8,
                cal: 5,
                lin: 4,
                pas: 4,
                cac: 5,
                cam: 7,
                bad: 9
            },
            {
                ans: "Innovator.",
                ss: 3,
                qa: 9,
                cal: 5,
                lin: 4,
                pas: 4,
                cac: 5,
                cam: 7,
                bad: 9
            },
            {
                ans: "Creator.",
                ss: 5,
                qa: 6,
                cal: 8,
                lin: 7,
                pas: 5,
                cac: 8,
                cam: 5,
                bad: 6
            },
            {
                ans: "Listener.",
                ss: 8,
                qa: 2,
                cal: 7,
                lin: 6,
                pas: 10,
                cac: 6,
                cam: 2,
                bad: 2
            }
        ]
    },
    {
        q: "When faced with a difficult situation, I am usually:",
        a: [
            {
                ans: "Able to see the big picture.",
                ss: 9,
                qa: 2,
                cal: 9,
                lin: 8,
                pas: 5,
                cac: 4,
                cam: 4,
                bad: 4
            },
            {
                ans: "Able to see the details.",
                ss: 8,
                qa: 4,
                cal: 7,
                lin: 6,
                pas: 9,
                cac: 8,
                cam: 4,
                bad: 5
            },
            {
                ans: "Unsure of what to do initially.",
                ss: 5,
                qa: 6,
                cal: 8,
                lin: 7,
                pas: 5,
                cac: 8,
                cam: 5,
                bad: 6
            },
            {
                ans: "Too focused on the details.",
                ss: 6,
                qa: 4,
                cal: 7,
                lin: 6,
                pas: 9,
                cac: 8,
                cam: 4,
                bad: 5
            }
        ]
    },
    {
        q: "Do you tend to do things the traditional/safe way or do you try to find an easier way to do it?",
        a: [
            {
                ans: "Traditional/safe way.",
                ss: 8,
                qa: 4,
                cal: 7,
                lin: 6,
                pas: 9,
                cac: 8,
                cam: 4,
                bad: 5
            },
            {
                ans: "Easier way.",
                ss: 9,
                qa: 2,
                cal: 9,
                lin: 8,
                pas: 5,
                cac: 4,
                cam: 4,
                bad: 4
            },
            {
                ans: "Depends on the situation.",
                ss: 5,
                qa: 6,
                cal: 8,
                lin: 7,
                pas: 5,
                cac: 8,
                cam: 5,
                bad: 6
            },
            {
                ans: "I don't really care.",
                ss: 6,
                qa: 4,
                cal: 7,
                lin: 6,
                pas: 9,
                cac: 8,
                cam: 4,
                bad: 5
            }
        ]
    },
    {
        q: "Do you prefer a fast-paced environment or a slow-paced environment?",
        a: [
            {
                ans: "Fast-paced.",
                ss: 0,
                qa: 10,
                cal: 0,
                lin: 0,
                pas: 3,
                cac: 4,
                cam: 10,
                bad: 10
            },
            {
                ans: "Slow-paced.",
                ss: 10,
                qa: 0,
                cal: 10,
                lin: 10,
                pas: 7,
                cac: 6,
                cam: 0,
                bad: 0
            },
            {
                ans: "Depends on the situation.",
                ss: 5,
                qa: 6,
                cal: 8,
                lin: 7,
                pas: 5,
                cac: 8,
                cam: 5,
                bad: 6
            },
            {
                ans: "I don't really care.",
                ss: 6,
                qa: 4,
                cal: 7,
                lin: 6,
                pas: 9,
                cac: 8,
                cam: 4,
                bad: 5
            }
        ]
    },
    {
        q: "When given free time, I usually:",
        a: [
            {
                ans: "Do something productive.",
                ss: 9,
                qa: 2,
                cal: 9,
                lin: 8,
                pas: 5,
                cac: 4,
                cam: 4,
                bad: 4
            },
            {
                ans: "Indulge in pleasureable activity.",
                ss: 2,
                qa: 6,
                cal: 0,
                lin: 7,
                pas: 0,
                cac: 0,
                cam: 0,
                bad: 0
            },
            {
                ans: "Take a step back and reflect.",
                ss: 10,
                qa: 4,
                cal: 10,
                lin: 8,
                pas: 8,
                cac: 4,
                cam: 2,
                bad: 9,
            },
            {
                ans: "Prefer mindless stimulation.",
                ss: 0,
                qa: 0,
                cal: 0,
                lin: 5,
                pas: 2,
                cac: 0,
                cam: 1,
                bad: 3,
            }
        ],
    },
];



// var questions = [{q: }]

// create an algorithm that finds which champions are the best match for the user
function championAlgorithm(ss, qa, cal, lin, pas, cac, cam, bad) {
    var closestChampArray = [];
    // Iterate through each champion in ChampArray and find the closest match
    // That is, find the champion with the smallest difference in each attribute
    for (var i = 0; i < champArray.length; i++) {
        var champ = champArray[i];
        var ssDiff = Math.abs(ss - champ.ss);
        var qaDiff = Math.abs(qa - champ.qa);
        var calDiff = Math.abs(cal - champ.cal);
        var linDiff = Math.abs(lin - champ.lin);
        var pasDiff = Math.abs(pas - champ.pas);
        var cacDiff = Math.abs(cac - champ.cac);
        var camDiff = Math.abs(cam - champ.cam);
        var badDiff = Math.abs(bad - champ.bad);
        var totalDiff = ssDiff + qaDiff + calDiff + linDiff + pasDiff + cacDiff + camDiff + badDiff;
        closestChampArray.push([champ.name, totalDiff]);
    }
    // Sort the array by the total difference
    closestChampArray.sort(function(a, b) {
        return a[1] - b[1];
    }
    );
    // Console.log the top 3 champions
    // alert("The top 3 champions for you are: " + closestChampArray[0][0] + ", " + closestChampArray[1][0] + ", and " + closestChampArray[2][0] + ".")
    return [closestChampArray[0][0], closestChampArray[1][0], closestChampArray[2][0]];
}

// a function that applies the final animations to the page
function finalAnimations() {
    // prior to animations, grab the images of the closestChampArray as well as names to display on the championContainer elem
    var questionLength = questions.length; 
    // use average ss,qa,etc. to grab the closestChampArray
    var chArray = championAlgorithm(ss_total/questionLength, qa_total/questionLength, cal_total/questionLength, lin_total/questionLength, pas_total/questionLength, cac_total/questionLength, cam_total/questionLength, bad_total/questionLength);
    // change the images and champ text to the 3 elements in the chArray
    // closestChampArray[0][0] is the name of the champion, so lowercase and add .png to the end
    // change the src of the img elements to the correct image, img1 is arr[0], img2, arr[1], img3, arr[2]
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var img3 = document.getElementById("img3");
    // change the source to closestChampArray[0][0] to lower case and add .png
    // alert("the source is " + chArray[0].toLowerCase() + ".png")
    // source is formatted as src={require("./res/img/icons/aatrox.png")}
    img1.src = require("./res/img/icons/" + chArray[0].toLowerCase() + ".png");
    img2.src = require("./res/img/icons/" + chArray[1].toLowerCase() + ".png");
    img3.src = require("./res/img/icons/" + chArray[2].toLowerCase() + ".png");
    // change the text of the championContainer to the names of the champions
    var name1 = document.getElementById("cname1");
    var name2 = document.getElementById("cname2");
    var name3 = document.getElementById("cname3");
    name1.innerHTML = chArray[0];
    name2.innerHTML = chArray[1];
    name3.innerHTML = chArray[2];
    // apply the animations
    var championContainer = document.getElementsByClassName("championContainer")[0];
    var questionContainer = document.getElementsByClassName("questionContainer")[0];
    championContainer.style.display = "block";
    championContainer.style.animation = "slide_up 2s 1";
    questionContainer.style.animation = "slide_right 2s 1";
    setTimeout(function() {
        questionContainer.style.display = "none";
    }
    , 2000);
}


const Home = () => {
    const navigate = useNavigate();
    
    
    const changeText = (e) => {
        question_count++;
        if(question_count > 14){
            var ch = championAlgorithm(ss_total, qa_total, cal_total, lin_total, pas_total, cac_total, cam_total, bad_total);
            //call final animations with the ch array 
            finalAnimations();
            //alert("Your results have been submitted. Thank you for taking the quiz!")
        }
        var opt1 = document.getElementById("opt1");
        var opt2 = document.getElementById("opt2");
        var opt3 = document.getElementById("opt3");
        var opt4 = document.getElementById("opt4");
        
        ss_total += parseInt(e.target.getAttribute('ss'));
        qa_total += parseInt(e.target.getAttribute('qa'));
        cal_total += parseInt(e.target.getAttribute('cal'));
        lin_total += parseInt(e.target.getAttribute('lin'));
        pas_total += parseInt(e.target.getAttribute('pas'));
        cac_total += parseInt(e.target.getAttribute('cac'));
        cam_total += parseInt(e.target.getAttribute('cam'));
        bad_total += parseInt(e.target.getAttribute('bad'));
        

        //change each question text, option text, and option attributes
        var questionText = document.getElementsByClassName("questionText")[0];
        questionText.innerHTML = questions[question_count].q;
        opt1.innerHTML = questions[question_count].a[0].ans;
        opt1.setAttribute('ss', questions[question_count].a[0].ss);
        opt1.setAttribute('qa', questions[question_count].a[0].qa);
        opt1.setAttribute('cal', questions[question_count].a[0].cal);
        opt1.setAttribute('lin', questions[question_count].a[0].lin);
        opt1.setAttribute('pas', questions[question_count].a[0].pas);
        opt1.setAttribute('cac', questions[question_count].a[0].cac);
        opt1.setAttribute('cam', questions[question_count].a[0].cam);
        opt1.setAttribute('bad', questions[question_count].a[0].bad);
        opt2.innerHTML = questions[question_count].a[1].ans;
        opt2.setAttribute('ss', questions[question_count].a[1].ss);
        opt2.setAttribute('qa', questions[question_count].a[1].qa);
        opt2.setAttribute('cal', questions[question_count].a[1].cal);
        opt2.setAttribute('lin', questions[question_count].a[1].lin);
        opt2.setAttribute('pas', questions[question_count].a[1].pas);
        opt2.setAttribute('cac', questions[question_count].a[1].cac);
        opt2.setAttribute('cam', questions[question_count].a[1].cam);
        opt2.setAttribute('bad', questions[question_count].a[1].bad);
        opt3.innerHTML = questions[question_count].a[2].ans;
        opt3.setAttribute('ss', questions[question_count].a[2].ss);
        opt3.setAttribute('qa', questions[question_count].a[2].qa);
        opt3.setAttribute('cal', questions[question_count].a[2].cal);
        opt3.setAttribute('lin', questions[question_count].a[2].lin);
        opt3.setAttribute('pas', questions[question_count].a[2].pas);
        opt3.setAttribute('cac', questions[question_count].a[2].cac);
        opt3.setAttribute('cam', questions[question_count].a[2].cam);
        opt3.setAttribute('bad', questions[question_count].a[2].bad);
        opt4.innerHTML = questions[question_count].a[3].ans;
        opt4.setAttribute('ss', questions[question_count].a[3].ss);
        opt4.setAttribute('qa', questions[question_count].a[3].qa);
        opt4.setAttribute('cal', questions[question_count].a[3].cal);
        opt4.setAttribute('lin', questions[question_count].a[3].lin);
        opt4.setAttribute('pas', questions[question_count].a[3].pas);
        opt4.setAttribute('cac', questions[question_count].a[3].cac);
        opt4.setAttribute('cam', questions[question_count].a[3].cam);
        opt4.setAttribute('bad', questions[question_count].a[3].bad);
        
        console.log(opt1.innerHTML);
        console.log(opt2.innerHTML);
        console.log(opt3.innerHTML);
        console.log(opt4.innerHTML);
        //q: why does it say opt2 is null?
        //a: because it's not defined yet. you need to define it first.
        //q: how do i define it?
        //a: var opt2 = document.getElementById("opt2");

        //print out target ss values
        console.log(e.target.getAttribute('ss'));

        var clickedDiv = e.target;
        var text = clickedDiv.innerHTML;
        console.log(text);
        
    }

    return (
        <div>
            <body>
                <div className="topContainer">
                    <div className="logo">LeaguePersona</div> 
                    <div className="subtitle">
                        Answer some questions and get a recommendation for your next League of Legends champion!
                    </div>
                </div>

                <div className="questionContainer">
                    <div className="question">
                        <div className="questionText">What career path do you feel most inclined to pursue?</div>
                        <div id="opt" className="questionOptions">
                            <div id="opt1" className="option" ss='8' qa='0' cal='10' lin='7' pas='3' cac='8' cam='0' bad='2' onClick={(e) => changeText(e)}>
                                Engineering
                            </div>

                            <div id="opt2" className="option" ss='10' qa='2' cal='3' lin='1' pas='8' cac='3' cam='0' bad='0' onClick={(e) => changeText(e)}>
                                Medicine
                            </div>
                            <div id="opt3" className="option" ss='2' qa='10' cal='5' lin='2' pas='0' cac='2' cam='10' bad='0' onClick={(e) => changeText(e)}>
                                Business
                            </div>
                            <div id="opt4" className="option" ss='3' qa='6' cal='0' lin='0' pas='7' cac='0' cam='8' bad='0' onClick={(e) => changeText(e)}>
                                Arts
                            </div>
                        </div>
                    </div>
                </div>

                <div className="championContainer">
                    Your champions are: 
                    <div id="spacer">SPACER</div>
                    <div className="champImageContainer">
                        <div className="champImage">
                            <img id="img1" src={require("./res/img/icons/aatrox.png")}></img>
                            <div id="cname1" className="champName">Aatrox</div>
                        </div>
                        <div className="champImage">
                            <img id="img2" src={require("./res/img/icons/ahri.png")}></img>
                            <div id="cname2" className="champName">Ahri</div>
                        </div>
                        <div className="champImage">
                            <img id="img3" src={require("./res/img/icons/akali.png")}></img>
                            <div id="cname3" className="champName">Akali</div>
                        </div>
                    </div>
                </div>

                {/* <div className="questionContainer" onClick={finalAnimations}>
                    hi -> FOR TESTING PURPOSES, click this to apply finalAniamtion
                </div> */}

                {/* <div className="questionContainer">
                    Test the algorithm here!
                    <div className="question" onClick={()=>championAlgorithm(10,10,10,10,10,10,10,10)}>
                        Click on this.
                    </div>
                </div> */}

            </body>
        </div>
    );

}

export default Home;