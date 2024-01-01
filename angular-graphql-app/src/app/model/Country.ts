//import { Continent } from "./Continent"
import {Continent } from '../model/Continent'

export interface Country {
    name : string
  capital : string
  currency : string
  emoji : string
  phone : string
  continent : Continent
}
