
"use client"
import {useState} from "react"
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import {generatePassword} from "../utils/generator.js"
import { Snippet } from "@nextui-org/snippet";



export const CardPassword = () => {
  const [password, setPassword] = useState<string>("")
  const [length, setLength] = useState<number>(0)
  const [avoidSimilar, setAvoidSimilar] = useState<boolean>(false)
  const [special, setSpecial] = useState<boolean>(false)

  const handleSubmit = () => {
    const newPassword = generatePassword(length, avoidSimilar, special)
    setPassword(newPassword)
  }

  return (
    <Card>
      <CardHeader className="flex flex-col gap-1">
      <Snippet hideSymbol size="lg" className="w-full text-center">{password}</Snippet>
        
        <p>Aquí irá la clasificación de contraseña</p>
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-center gap-5">
          <Input
            id="react-aria-:R1iracq:"
            aria-describedby="react-aria-:R1iracqH3: react-aria-:R1iracqH4:"
            type="number"
            value={length}
            placeholder="length"
            onChange={(e) => setLength((e.target.value))}
            className="max-w-[100px]"
          />
          <span className="font-bold">how many characters?</span>
        </div>

          <div className="mb-3 flex items-center justify-center gap-5">
            <Checkbox
              color="success"
              onChange={(e) => setAvoidSimilar(e.target.checked)}
              aria-labelledby=":R1iracq"
              aria-describedby="react-aria-:R2iracqH3:"
            />
            <span className="font-bold"> Avoid similar characters?</span>
          </div>
          <div className="mb-3 flex items-center justify-center gap-5">
            <Checkbox
              color="success"
              onChange={(e) => setSpecial(e.target.checked)}
              aria-labelledby=":R1iracq"
              aria-describedby="react-aria-:R2iracqH3:"
            />
            <span className="font-bold"> Want special characters? &quot;@;/_...&quot;</span>
          </div>


      </CardBody>
        <CardFooter>
            <div className="w-full grid relative -top-2 place-items-center ">
                <Button className="bg-gradient-to-tr uppercase font-bold hover:scale-105 duration-300 ease-in-out from-green-500 to-yellow-500 text-white shadow-lg" variant="shadow" onPress={handleSubmit} >
                    Generate Password
                </Button>
            </div>
        </CardFooter>

    </Card>
  );
};
