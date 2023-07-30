"use client";
import { FormEvent, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { generatePassword } from "../utils/generator.js";
import { Snippet } from "@nextui-org/snippet";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { FcApproval, FcHighPriority, FcLock } from "react-icons/fc";

export const CardPassword = () => {
  const [password, setPassword] = useState<string>("");
  const [length, setLength] = useState<number>(0);
  const [avoidSimilar, setAvoidSimilar] = useState<boolean>(false);
  const [special, setSpecial] = useState<boolean>(false);
  const [classification, setClassification] = useState<number>(0);


  const handleChange = (e: FormEvent<HTMLLabelElement>, setSomething: (arg0: boolean) => void) => {
    const target = e.target as HTMLInputElement;
    setSomething(target.checked);
    
  }
  

  const handleSubmit = () => {
    const newPassword = generatePassword(length, avoidSimilar, special);
    if (!avoidSimilar && !special) {
      return enqueueSnackbar({ // en el caso de que no se seleccione ninguna opción
        message: "You need to select at least one option",
        variant: "error",
      });
    }
    if (length <= 0) {
      return enqueueSnackbar({ // en el caso de que coloque un número menor a 0 o 0
        message: "You need to select a number greater than 0",
        variant: "error",
      });
    }

    // en el caso de que se seleccione alguna opción
    enqueueSnackbar({ message: "Password generated", variant: "success" });

    // clasificación de contraseña
    if (length < 5 ) {
      setClassification(1);

    }
    else if (length >= 5 && length <= 10) {
      setClassification(2);
    }
    else if (length > 10) {
      setClassification(3);
    }


    
    setPassword(newPassword);
  };

  return (
    <Card>
      <SnackbarProvider />
      <CardHeader className="flex flex-col gap-1">
        <Snippet
          hideSymbol
          size="lg"
          className="w-full text-center">
          {password}
        </Snippet>

        <p className="flex w-full gap-2 justify-center items-center text-lg">{classification == 1 ? <FcHighPriority/>  : classification == 2 ? <FcApproval/> : classification==3 ? <FcLock/>: ""  } {classification == 1 ? "Weak" : classification == 2 ? "Medium" : classification==3 ? "Strong": ""}</p>
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-center gap-5">
          <Input
            id="react-aria-:R1iracq:"
            aria-describedby="react-aria-:R1iracqH3: react-aria-:R1iracqH4:"
            type="number"

            value={String(length)}
            placeholder="length"
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="max-w-[100px]"
          />
          <span className="font-bold">how many characters?</span>
        </div>

        <div className="mb-3 flex items-center justify-center gap-5">
          <Checkbox
            color="success"
            onChange={(e) => handleChange(e, setAvoidSimilar)}
            aria-labelledby=":R1iracq"
            aria-describedby="react-aria-:R2iracqH3:"
          />
          <span className="font-bold"> Avoid similar characters?</span>
        </div>
        <div className="mb-3 flex items-center justify-center gap-5">
          <Checkbox
            color="success"
            onChange={(e) => handleChange(e, setSpecial)}
            aria-labelledby=":R1iracq"
            aria-describedby="react-aria-:R2iracqH3:"
          />
          <span className="font-bold">
            {" "}
            Want special characters? &quot;@;/_...&quot;
          </span>
        </div>
      </CardBody>
      <CardFooter className="flex justify-center items-center flex-col gap-3">
        <div className="relative -top-2 grid w-full place-items-center ">
          <Button
            className="bg-gradient-to-tr from-green-500 to-yellow-500 font-bold uppercase text-white shadow-lg duration-300 ease-in-out hover:scale-105"
            variant="shadow"
            onPress={handleSubmit}>
            Generate Password
          </Button>
        </div>
        <p className="text-center italic text-md font-semibold"> Developed by DevKaliper</p>
      </CardFooter>
    </Card>
  );
};
