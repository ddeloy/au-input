
# Angular Libray

This module contains a couple of Angular Input box components that allow to add an icon inside a text input, which helps better identify common input fields like for example email, etc.

This small module contains only the HTML and CSS necessary to implement this very common HTML pattern. 

The default theme of the input is designed to look just like a plain HTML input, including the focus blue border (tab and shift-tab are supported).

Any icon available on either the [Font Awesome](http://fontawesome.io) or the [Google Material Design](https://material.io/icons/) Icon libraries can be used.

### Foundation of a more extensive Component Library:
- View ongoing poc at: [ddeloy.net/itn-input](http://ddeloy.net/itn-input/) 
- The demo site will poc the selective customization of additional, commonly used html elements, with material design styles(ie. buttons, navigation etc.).
- Additional features will be gradually added to the npm itn-input library 

Special thanks to: [Angular University](https://angular-university.io/) for excellent course on Building your own Angular Library which provided basis for this project.

### Features:

- The components have minimum styling and are theme-able 
- there is no need to include a component-specific external stylesheet, only the Font Awesome or Material icons stylesheets
- As the input component takes a plain input and projects it, this means that by design the component supports all standard HTML input attributes, including custom attributes (data-), all the accessiblity properties, etc.
- This also means that these components are Compatible with Angular Forms 
- This repo is based on the [angular-quickstart-lib](https://github.com/filipesilva/angular-quickstart-lib), 
which is a seed repo (under development) for a library in the [Angular Package Format v4.0](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/edit#heading=h.k0mh3o8u5hx).
- This means for example that this module is compatible with AOT, and includes UMD bundles for use with SystemJs



# Installation

This is how to install the components:

```bash
npm install itn-input
```

or 

```bash
yarn add itn-input
```


And on your application module:

```ts
import {ItnInputModule} from 'itn-input';

@NgModule({
  declarations: [ ...],
  imports: [
    BrowserModule,
    ....,
     ItnInputModule
],
})
export class AppModule { }
```

# Using the Font Awesome Inputs

First add version of Font Awesome to our page, for example:

```html
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
```

Then we can use the Font Awesome Input like this:

```html
<itn-fa-input icon="envelope">
    <input itnInput type="email" name="email" placeholder="Email" autocomplete="off" 
</itn-fa-input>
```

The inputs receive an input property named `icon` that identifies which Font Awesome icon we want to apply. 

The value `envelope` will add the email icon by adding the CSS class `fa-envelope` to the icon, etc.

The input that you pass inside the component is just a plain HTML input that will be projected inside the component, so all the standard HTML properties of an input apply. 

To make sure that the focus functionality is working correctly, make sure to apply the attribute directive `itnInput` like in the examples. 


# Using the Material Design Input

We will need to add first a version of the Google Material Design icons to our page, for example:

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

Then use the Material Design Input like this:

```html
<itn-md-input icon="search">
    <input itnInput type="email" name="email" placeholder="E-mail">
</itn-md-input>
```
# Applying a custom theme
You can take advantage of host-context pseudo class to display a custom theme that mimiics the material design input style - with a border just along bottom of the input
Just add the class to any host element container and the class will be selectively applied to any nested itn-fa-input or itn-md-input components 

```html
<div class="custom-md-theme">
  <itn-fa-input icon="envelope">
      <input itnInput type="email" name="email" placeholder="Email" autocomplete="off" 
  </itn-fa-input>
  <itn-md-input icon="search">
      <input itnInput type="email" name="email" placeholder="E-mail">
  </itn-md-input>
</div>
```

or...

```html
<itn-md-input icon="search" class="custom-md-theme">
    <input itnInput type="email" name="email" placeholder="E-mail">
</itn-md-input>
```
        
# Running the Demo Application
This command will build and start the demo application:

```bash
npm start
```


# Running This Module In Development

Build the library using this command:

```bash
npm run build
```

# License 

[MIT](https://opensource.org/licenses/MIT)





