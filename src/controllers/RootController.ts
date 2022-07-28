// import { Request, Response } from "express";

// class RootController {
//   getRoot(req: Request, res: Response): void {
//     if (req.session) {
//       res.send("You are logged in");
//     } else {
//       res.send("You are not logged in");
//     }
//   }
// }

const classDecorator = (constructor: typeof Shop) => {
  console.log(constructor);
};

const testDecorator = (target: any, key: string): void => {
  console.log("Target: ", target);
  console.log("Key: ", key);
};

const logError = (errorMessage: string) => {
  return (target: any, key: string, desc: PropertyDescriptor): void => {
    const method = desc.value;

    desc.value = () => {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
};

@classDecorator
class Shop {
  @testDecorator
  name: string = "Infinite";

  @testDecorator
  get shopName(): string {
    return `This is ${this.name} Computer Parts Shop`;
  }

  @logError("Oops, owner is drunk")
  owner(): void {
    throw new Error();
    console.log("Yuri");
  }
}

// console.log(new Shop().owner());

// testDecorator(Shop.prototype, "owner");
// To change a prototype, we have to go through propertydescriptor
// decorators doesn't have access to property values
