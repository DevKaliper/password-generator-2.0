import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

export const CardPassword = () => {
  return (
    <Card>
      <CardHeader className="flex flex-col gap-1">
        <Input
          id="react-aria-:Raracq:"
          aria-describedby="react-aria-:RaracqH3: react-aria-:RaracqH4:"
          isReadOnly
          variant="bordered"
          placeholder="Your password will appear here..."
          className="mx-auto max-w-xs"
        />
        <p>Aquí irá la clasificación de contraseña</p>
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-center gap-5">
          <Input
            id="react-aria-:R1iracq:"
            aria-describedby="react-aria-:R1iracqH3: react-aria-:R1iracqH4:"
            type="number"
            placeholder="length"
            className="max-w-[100px]"
          />
          <span className="font-bold">how many characters?</span>
        </div>

          <div className="mb-3 flex items-center justify-center gap-5">
            <Checkbox
              color="success"
              aria-labelledby=":R1iracq"
              aria-describedby="react-aria-:R2iracqH3:"
            />
            <span className="font-bold"> Avoid similar characters?</span>
          </div>
          <div className="mb-3 flex items-center justify-center gap-5">
            <Checkbox
              color="success"
              aria-labelledby=":R1iracq"
              aria-describedby="react-aria-:R2iracqH3:"
            />
            <span className="font-bold"> Hexadecimal 0-9, A-F</span>
          </div>


      </CardBody>
        <CardFooter>
            <div className="w-full grid relative -top-2 place-items-center ">
                <Button className="bg-gradient-to-tr uppercase font-bold hover:scale-105 duration-300 ease-in-out from-green-500 to-yellow-500 text-white shadow-lg" variant="shadow" >
                    Generate Password
                </Button>
            </div>
        </CardFooter>

    </Card>
  );
};
