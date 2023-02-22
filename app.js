console.log('js loaded')

const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 2,
  to: 'Jake',
  trackingNumber: '1324kjs'
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: .5,
  to: 'Mick',
  trackingNumber: '1325sdk'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: .5,
  to: 'Sam',
  trackingNumber: 'jffd147'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 4,
  to: 'Jerms',
  trackingNumber: 'acdc145'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Sav',
  trackingNumber: 'hwz5501'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 5,
  to: 'Miles',
  trackingNumber: '8081baz'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 12,
  to: 'Chelsea',
  trackingNumber: 'suz2367'
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 6,
  to: 'Zach',
  trackingNumber: 'olk3901'
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 8,
  to: 'Jeanne',
  trackingNumber: '4512ghy'
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 3,
  to: 'Jordan',
  trackingNumber: 'fnj7642'
},]

function drawPackages(packagesArray) {
  let packagesElem = document.getElementById('packages')
  let template = ''
  packagesArray.forEach(package => {
    template += `
    <div class="col-3 card m-1 pt-2 text-center">
    <h3>Deliver TO: ${package.to}</h3>
    <h4>Tracking ID: ${package.trackingNumber}</h4>
    <h4>Priority Level: ${package.priorityLevel}</h4>
    <h4>Weight: ${package.weight} lbs</h4>
  </div>
    `
  })
  packagesElem.innerHTML = template
}

function filterFragile() {
  let fragilePackages = packages.filter(package => package.isFragile == true)
  console.log('fragile packages:', fragilePackages)
  drawPackages(fragilePackages)
}

function filterFree() {
  let freePackages = packages.filter(package => package.priorityLevel == 'free')
  console.log('Getting free packages', freePackages)
  drawPackages(freePackages)
}

function filterStandard() {
  let standardPackages = packages.filter(package => package.priorityLevel == 'standard')
  console.log('Getting standard packages', standardPackages)
  drawPackages(standardPackages)
}

function filterExpress() {
  let expressPackages = packages.filter(package => package.priorityLevel == 'express')
  console.log('Getting express packages', expressPackages)
  drawPackages(expressPackages)
}

function sortLightToHeavy() {
  let lightToHeavy = packages.sort((packageA, packageB) => packageA.weight - packageB.weight)
  console.log('Light to heavy', lightToHeavy)
  drawPackages(lightToHeavy)
}

function sortHeavyToLight() {
  let heavyToLight = packages.sort((packageA, packageB) => packageB.weight - packageA.weight)
  console.log('Heavy to light', heavyToLight)
  drawPackages(heavyToLight)
}

drawPackages(packages)