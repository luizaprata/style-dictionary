const StyleDictionary = require('style-dictionary');

console.log('Build started...');
console.log('\n==============================================');

// StyleDictionary.registerTransform({
//   name: 'unitless/dp-sp',
//   type: 'value',
//   matcher: function(token) {
//       return token.group === 'typography' || token.group === 'spacing';
//   },
//   transformer: function(token) {
//       // in Android font sizes are expressed in "sp" units
//       let unit = (token.group === 'typography') ? 'sp' : 'dp';
//       return `${token.value}${unit}`;
//   }
// });


// REGISTER THE CUSTOM TRANFORM GROUPS

// if you want to see what a pre-defined group contains, uncomment the next line:
// console.log(StyleDictionary.transformGroup['group_name']);

// StyleDictionary.registerTransformGroup({
//   name: 'custom/scss',
//   // notice: here the "size/px" transform is not the pre-defined one, but the custom one we have declared above
//   transforms: ['attribute/cti', 'name/cti/constant', 'size/px', 'color/css', 'time/seconds', 'ratio/%']
// });

StyleDictionary.registerTransformGroup({
    name: 'custom/scss',
    // this is to show one possibility for adding a few transforms to a pre-defined group
    // (however, we suggest to use the previous approach, which is more explicit and clear)
    transforms: ["attribute/cti", "name/cti/kebab", "time/seconds", "content/icon", "size/px", "color/hex"],
  });
  

// APPLY THE CONFIGURATION
// IMPORTANT: the registration of custom transforms
// needs to be done _before_ applying the configuration
const StyleDictionaryExtended = StyleDictionary.extend(__dirname + '/style-dictionary/config.json');


// FINALLY, BUILD ALL THE PLATFORMS
StyleDictionaryExtended.buildAllPlatforms();


console.log('\n==============================================');
console.log('\nBuild completed!');