let elList = document.querySelector(".js-list")
let elSelect = document.querySelector(".js-select")

function Domgachiqarator(array, node){
	for (arr of array){
		var newItem = document.createElement("li");
		var elImg = document.createElement("img");
		var elId = document.createElement("h2");
		var elNum = document.createElement("strong");
      elNum.style.display = "block"
      elNum.style.fontSize = "20px"
		var elType = document.createElement("strong");
      elType.style.display = "block"
      elType.style.fontSize = "20px"
		var elHeight = document.createElement("strong");
      elHeight.style.display = "block"
      elHeight.style.fontSize = "20px"
		var elWeight = document.createElement("strong");
      elWeight.style.display = "block"
      elWeight.style.fontSize = "20px"
		var elCandy = document.createElement("strong");
      elCandy.style.display = "block"
      elCandy.style.fontSize = "20px"
		var elEgg = document.createElement("strong");
      elEgg.style.display = "block"
      elEgg.style.fontSize = "20px"
		var elSpawn_chance = document.createElement("strong");
      elSpawn_chance.style.display = "block"
      elSpawn_chance.style.fontSize = "20px"
		var elAvg_spawns = document.createElement("strong");
      elAvg_spawns.style.display = "block"
      elAvg_spawns.style.fontSize = "20px"
		var elSpawn_time = document.createElement("strong");
      elSpawn_time.style.display = "block"
      elSpawn_time.style.fontSize = "20px"
		var multipliers = document.createElement("strong");
      multipliers.style.display = "block"
      multipliers.style.fontSize = "20px"
		var weaknesses = document.createElement("strong");
      weaknesses.style.display = "block"
      weaknesses.style.fontSize = "20px"
	
		newItem.setAttribute("class", "item")
		node.appendChild(newItem)
		newItem.appendChild(elImg)
		newItem.appendChild(elId)
		newItem.appendChild(elNum)
		newItem.appendChild(elType)
		newItem.appendChild(elHeight)
		newItem.appendChild(elWeight)
		newItem.appendChild(elCandy)
		newItem.appendChild(elEgg)
		newItem.appendChild(elSpawn_chance)
		newItem.appendChild(elAvg_spawns)
		newItem.appendChild(elSpawn_time)
		newItem.appendChild(multipliers)
		newItem.appendChild(weaknesses)
	
	
	elId.textContent = `id: ${arr.id}`;
	elNum.textContent = `num: ${arr.num}`
	elImg.src = `${arr.img}`
	elImg.setAttribute("alt", "images-pocemens")
	elImg.setAttribute("class", "img")
	elImg.setAttribute("width", "100%")
	elImg.setAttribute("height", "300")
	elType.textContent = `type: ${arr.type}`
	elHeight.textContent = `height: ${arr.height}`
	elWeight.textContent = `weight: ${arr.weight}`
	elCandy.textContent = `candy: ${arr.candy}`
	elEgg.textContent = `egg: ${arr.egg}`
	elSpawn_chance.textContent = `spawn_chance: ${arr.spawn_chance}`
	elAvg_spawns.textContent = `avg_spawns: ${arr.avg_spawns}`
	elSpawn_time.textContent = `spawn_time: ${arr.spawn_time}`
	multipliers.textContent = `multipliers: ${arr.multipliers}`
	weaknesses.textContent = `weaknesses: ${arr.weaknesses}`
	}
}

Domgachiqarator(pokemons,elList);

let myArray = [];

for (item of pokemons) {
  myArray.push(...item.type);
}

let mySet = new Set(myArray);

for (const item of Array.from(mySet)) {
  let li = document.createElement("option");
  li.textContent = item;
  elSelect.appendChild(li);
}


var result = [];

elSelect.addEventListener("change",function(){
	elList.innerHTML = "";
	result = [];
   pokemons.forEach((poc) => {
    if(poc.type.includes(elSelect.value)){
      result.push(poc);
    }
  })
	Domgachiqarator(result,elList);
	
});