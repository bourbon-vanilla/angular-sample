# AngularSolution

## Project info

This is an Angular project in version 12.

### Bootstrap installed

```bash
npm install bootstrap
```

and afterwards the bootstrap.css was added in `angular.json`.

### Then ng-bootrap was installed

```bash
ng add @ng-bootstrap/ng-bootstrap
```
Package link:

* https://www.npmjs.com/package/@ng-bootstrap/ng-bootstrap

<br><br>

## Run - Details


### Docker

```bash
# To build a docker image for this angular application run:
docker build -t account/devices-hub-image:latest . 

# To spin a container up from the created image run:
docker run -d -p 8080:80 --name devices-hub account/devices-hub-image:latest
```

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.