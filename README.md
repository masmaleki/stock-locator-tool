# nexar-gpa-tool

The GP&A tool is a React component that can be embedded onto your website. It provides search functionality to display offers for a part, powered by the Nexar API (nexar.com).

## Prerequisites

You must have a Nexar account and application at nexar.com that has the supply scope. The application's client ID and client secret should be used to fetch access tokens that will then be used by the tool.

## Embedding

There a couple of methods to installing the tool outlined below. The most seamless experience would be to use the NPM package. If you want the most customizable experience I would recommend the "Drag and Drop" method. With this you can then dive into the code to customize as you wish and make any adaptations.

### NPM Package

We have released the tool as an NPM package and it can be found at https://www.npmjs.com/package/@altiumnexar/gpa-tool. To install the package, use the command `npm i @altiumnexar/gpa-tool`. Then you can import `GpaTool` into your project.

### Drag and Drop

In `nexar-gpa-tool/react-app/src` you will find the folder `nexar-gpa-tool` and contains all of the code for the component. To embed the tool simply drag and drop this folder into your project and install any missing dependencies - these are listed at the bottom of the page.

## Parameters

This is a mandatory attribute for the tool and includes your preferences for the tools search functionality as well as the access token. The only mandatory field here is the `token` as without it the tool won't be functional. Listed below are the fields:

```
authorizedOnly?: boolean,
// Whether to only return offers from authorized dealers (optional, default: false)
country?: string,
// Your user's ISO-3166-1 alpha-2 country code (optional, default: "US")
currency?: string,
// Your user's ISO-4217 currency code (optional, default: "USD")
enableManufacturerLink?: boolean,
// Whether to enable direct-to-manufacturer links for parts in search results (optional, default: false)
// If true and there is a direct-to-manufacturer pdp link in the part data, manufacturer name and mpn will link directly to the manufacturer pdp. If true and there is NO direct-to-manufacturer pdp link, manufacturer name and mpn will not link to anywhere. If false, manufacturer name and mpn will link directly to Octopart pdp.
expandOfferTable?: boolean,
// Whether to expand offer table by default (optional, default: false)
inStockOnly?: boolean,
// Whether to only return parts that have stock available (optional, default: false)
limit?: number,
// How many parts to return in search results (optional, default: 10)
q?: string,
// Default query to search for on page load (optional)
token: string,
// Access token for Nexar API (mandatory)
```

### Token

Nexar uses the OAuth2 authorization flow for API access. To query the API a valid access token must be provided. For development and testing, you can generate an access token in the [Nexar Portal](https://portal.nexar.com/) by going to Applications -> Details (for your app) -> Access Token -> Generate Token.

For real applications of the tool, tokens should be automatically fetched as needed. These tokens are valid for 24 hours and should be cached accordingly. We have an example in the folder `express-app` which provides tokens on localhost:5000 which are then fetched by the example site in the folder `react-app`.

The endpoint for fetching access tokens is https://identity.nexar.com/connect.token. You must pass in the `client_credentials` grant type and also your applications client id and client secret.

## Styling

Without diving into the code or for use with the NPM package there is a `styles` attribute on the `GpaTool` component for customization. Without this attribute the tool will default to a light theme and the Roboto font. The fields are listed below:

```
font?: string,
// Global font for all components in the tool. It will fetch the font using [webfontloader](https://www.npmjs.com/package/webfontloader) (optional, default: "Roboto").
theme?: "light" | "dark",
// There are two pre-made themes light and dark. (optional, default: "light")
customColors?: IncomingColors,
// If you would prefer to customize the tool further than one of the themes you can use this field to pass in your custom colors. The sub-fields of this field are outlined below.
```

```
background: string,
// Background color of the whole tool (mandatory)
tint: string,
// Color for borders and other tints (mandatory)
text: string,
// Color for all text (mandatory)
button: string,
// Color for button colors (mandatory)
buttonSecondary: string,
// Color for button text and border (mandatory)
row1: string,
// Color for one row of the offers table (mandatory)
row2: string,
// Color for the other row of the offers table (mandatory)
searchFormBackground?: string,
// Background color of the form containing the search box and dropdown options (optional, default: background)
highlight?: string,
// Color for the mpn match highlighting (optional)
partHeaderBackground?: string,
// Background color for the header of each returned part (optional, default: background)
partHeaderMpn?: string,
// Color for the mpn text in a part's header (optional, default: partHeaderText)
partHeaderText?: string,
// Color for the text in a part's header (optional, default: text)
tableHeaderText?: string,
// Color for the text for an offer table's header (optional, default: text)
keyText?: string,
// Color for the text of prices and stock (optional, default: text)
```

If you would like to customize the tool further to your liking, it uses [styled-components](https://styled-components.com/). Within the `nexar-gpa-tool/components` folder you can find all the components for the tool. At the highest level are files such as `GpaTool.tsx`, `searchForm.tsx` or `searchResults.tsx`. Then going into the `part` folder you can find the components for the offers tables.

The final attribute on the `GpaTool` component is `hideColumns`. Here you can easily hide certain columns from the offers tables. Each field is a boolean that will default to false, if you wish to hide a column, simply set the field corresponding to the column you want to hide to "true". Here's an example showing all fields:

```
hideColumns={{
    isAuthorized: false,
    distributor: false,
    sku: false,
    stock: false,
    moq: false,
    cta: true,
    currency: true,
    price1: false,
    price10: false,
    price100: false,
    price1000: false,
    price10000: false,
    updated: false,
}}
```

### Tool Dependencies

[country-list](https://www.npmjs.com/package/country-list), [date-fns](https://www.npmjs.com/package/date-fns), [react-highlight-words](https://www.npmjs.com/package/react-highlight-words) and [styled-components](https://www.npmjs.com/package/styled-components)
