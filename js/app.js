const afghanistan = document.querySelector('#af')
const albania = document.querySelector('#al')
const algeria = document.querySelector('#dz')
const angola = document.querySelector('#ao')
const argentina = document.querySelector('#ar')
const armenia = document.querySelector('#am')
const australia = document.querySelector('#au')
const austria = document.querySelector('#at')
const azerbaijan = document.querySelector('#az')
const bahamas = document.querySelector('#bs')
const bangladesh = document.querySelector('#bd')
const belarus = document.querySelector('#by')
const belgium = document.querySelector('#be')
const belize = document.querySelector('#bz')
const benin = document.querySelector('#bj')
const bhutan = document.querySelector('#bt')
const bolivia = document.querySelector('#bo')
const bosnia = document.querySelector('#ba')
const botswana = document.querySelector('#bw')
const brazil = document.querySelector('#br')
const brunei = document.querySelector('#bn')
const bulgaria = document.querySelector('#bg')
const burkina = document.querySelector('#bf')
const burundi = document.querySelector('#bi')
const canada = document.querySelector('#ca')
const congokin = document.querySelector('#cd')
const cambodia = document.querySelector('#kh')
const cameroon = document.querySelector('#cm')
const cape = document.querySelector('#cv')
const centralafrican = document.querySelector('#cf')
const chad = document.querySelector('#td')
const chile = document.querySelector('#cl')
const china = document.querySelector('#cn')
const colombia = document.querySelector('#co')
const comoros = document.querySelector('#km')
const congobraz = document.querySelector('#cg')
const costarica = document.querySelector('#cr')
const croatia = document.querySelector('#hr')
const cuba = document.querySelector('#cu')
const cyprus = document.querySelector('#cy')
const czechrepublic = document.querySelector('#cz')
const ivorycoast = document.querySelector('#ci')
const denmark = document.querySelector('#dk')
const djibouti = document.querySelector('#dj')
const dominica = document.querySelector('#dm')
const dominican = document.querySelector('#do')
const ecuador = document.querySelector('#ec')
const egypt = document.querySelector('#eg')
const elsalvador = document.querySelector('#sv')
const equatorialguinea = document.querySelector('#gq')
const eritrea = document.querySelector('#er')
const estonia = document.querySelector('#ee')
const ethiopia = document.querySelector('#et')
const finland = document.querySelector('#fi')
const france = document.querySelector('#fr')
const gabon = document.querySelector('#ga')
const gambia = document.querySelector('#gm')
const georgia = document.querySelector('#ge')
const germany = document.querySelector('#de')
const ghana = document.querySelector('#gh')
const greece = document.querySelector('#gr')
const greenland = document.querySelector('#gl')
const guatemala = document.querySelector('#gt')
const guinea = document.querySelector('#gn')
const guineabissau = document.querySelector('#gw')
const guyana = document.querySelector('#gy')
const haiti = document.querySelector('#ht')
const honduras = document.querySelector('#hn')
const hungary = document.querySelector('#hu')
const iceland = document.querySelector('#is')
const india = document.querySelector('#in')
const indonesia = document.querySelector('#id')
const iran = document.querySelector('#ir')
const iraq = document.querySelector('#iq')
const ireland = document.querySelector('#ie')
const israel = document.querySelector('#il')
const italy = document.querySelector('#it')
const jamaica = document.querySelector('#jm')
const japan = document.querySelector('#jp')
const jordan = document.querySelector('#jo')
const kazakhstan = document.querySelector('#kz')
const kenya = document.querySelector('#ke')
const koreas = document.querySelector('#kr')
const kuwait = document.querySelector('#kw')
const kyrgyzstan = document.querySelector('#kg')
const lao = document.querySelector('#la')
const latvia = document.querySelector('#lv')
const lebanon = document.querySelector('#lb')
const lesotho = document.querySelector('#ls')
const liberia = document.querySelector('#lr')
const libya = document.querySelector('#ly')
const lithuania = document.querySelector('#lt')
const luxembourg = document.querySelector('#lu')
const macedonia = document.querySelector('#mk')
const madagascar = document.querySelector('#mg')
const malawi = document.querySelector('#mw')
const malaysia = document.querySelector('#my')
const maldives = document.querySelector('#mv')
const mali = document.querySelector('#ml')
const malta = document.querySelector('#mt')
const mauritania = document.querySelector('#mr')
const mauritius = document.querySelector('#mu')
const mexico = document.querySelector('#mx')
const moldova = document.querySelector('#md')
const mongolia = document.querySelector('#mn')
const montenegro = document.querySelector('#me')
const morocco = document.querySelector('#ma')
const mozambique = document.querySelector('#mz')
const myanmar = document.querySelector('#mm')
const namibia = document.querySelector('#na')
const nepal = document.querySelector('#np')
const netherlands = document.querySelector('#nl')
const newzealand = document.querySelector('#nz')
const nicaragua = document.querySelector('#ni')
const niger = document.querySelector('#ne')
const nigeria = document.querySelector('#ng')
const norway = document.querySelector('#no')
const oman = document.querySelector('#om')
const pakistan = document.querySelector('#pk')
const panama = document.querySelector('#pa')
const papuanewguinea = document.querySelector('#pg')
const paraguay = document.querySelector('#py')
const peru = document.querySelector('#pe')
const philippines = document.querySelector('#ph')
const poland = document.querySelector('#pl')
const portugal = document.querySelector('#pt')
const qatar = document.querySelector('#qa')
const romania = document.querySelector('#ro')
const russia = document.querySelector('#ru')
const rwanda = document.querySelector('#rw')
const saintlucia = document.querySelector('#lc')
const saintvincent = document.querySelector('#vc')
const saotome = document.querySelector('#st')
const saudi = document.querySelector('#sa')
const senegal = document.querySelector('#sn')
const serbia = document.querySelector('#rs')
const seychelles = document.querySelector('#sc')
const sierraleone = document.querySelector('#sl')
const singapore = document.querySelector('#sg')
const slovakia = document.querySelector('#sk')
const slovenia = document.querySelector('#si')
const somalia = document.querySelector('#so')
const southafrica = document.querySelector('#za')
const southsudan = document.querySelector('#ss')
const spain = document.querySelector('#es')
const srilanka = document.querySelector('#lk')
const sudan = document.querySelector('#sd')
const suriname = document.querySelector('#sr')
const swaziland = document.querySelector('#sz')
const sweden = document.querySelector('#se')
const switzerland = document.querySelector('#ch')
const syria = document.querySelector('#sy')
const taiwan = document.querySelector('#tw')
const tajikistan = document.querySelector('#tj')
const tanzania = document.querySelector('#tz')
const thailand = document.querySelector('#th')
const togo = document.querySelector('#tg')
const trinidadandtobago = document.querySelector('#tt')
const tunisia = document.querySelector('#tn')
const turkey = document.querySelector('#tr')
const uganda = document.querySelector('#ug')
const ukraine = document.querySelector('#ua')
const unitedarabemirates = document.querySelector('#ae')
const unitedkingdom = document.querySelector('#gb')
const usamerica = document.querySelector('#us')
const uruguay = document.querySelector('#uy')
const uzbekistan = document.querySelector('#uz')
const venezuela = document.querySelector('#ve')
const vietnam = document.querySelector('#vn')
const yemen = document.querySelector('#ye')
const zambia = document.querySelector('#zm')
const zimbabwe = document.querySelector('#zw')


function global(data) {

    const details = document.createElement("div")
    details.className= "details"

    const gcases = document.createElement("h1")
    gcases.className = "global"
    gcases.textContent = "Global Cases"

    const newConfirmed = document.createElement("p")
    newConfirmed.textContent = "New Confirmed: " + data.Global.NewConfirmed

    const totalConfirmed = document.createElement("p")
    totalConfirmed.textContent = "Total Confirmed: " + data.Global.TotalConfirmed

    const newDeaths = document.createElement("p")
    newDeaths.textContent = "New Deaths: " + data.Global.NewDeaths

    const totalDeaths = document.createElement("p")
    totalDeaths.textContent = "Total Deaths: " + data.Global.TotalDeaths

    const newRecovered = document.createElement("p")
    newRecovered.textContent = "New Recovered: " +data.Global.NewRecovered

    const totalRecovered = document.createElement("p")
    totalRecovered.textContent = "Total Recovered: " +data.Global.TotalRecovered

    const lastUpdate = document.createElement("p")
    lastUpdate.className = "update"
    lastUpdate.textContent = "Last Updated: " +data.Date


    details.appendChild(gcases)
    details.appendChild(newConfirmed)
    details.appendChild(totalConfirmed)
    details.appendChild(newDeaths)
    details.appendChild(totalDeaths)
    details.appendChild(newRecovered)
    details.appendChild(totalRecovered)
    details.appendChild(lastUpdate)
    document.querySelector('section').appendChild(details)
}

function covid(data) {

    const details = document.createElement("div")
    details.className= "details"

    const country = document.createElement("h1")
    country.textContent =  data.Countries[x].Country

    const newConfirmed = document.createElement("p")
    newConfirmed.textContent = "New Confirmed: " + data.Countries[x].NewConfirmed

    const totalConfirmed = document.createElement("p")
    totalConfirmed.textContent = "Total Confirmed: " + data.Countries[x].TotalConfirmed

    const newDeaths = document.createElement("p")
    newDeaths.textContent = "New Deaths: " + data.Countries[x].NewDeaths

    const totalDeaths = document.createElement("p")
    totalDeaths.textContent = "Total Deaths: " + data.Countries[x].TotalDeaths

    const newRecovered = document.createElement("p")
    newRecovered.textContent = "New Recovered: " +data.Countries[x].NewRecovered

    const totalRecovered = document.createElement("p")
    totalRecovered.textContent = "Total Recovered: " +data.Countries[x].TotalRecovered

    const lastUpdate = document.createElement("p")
    lastUpdate.className = "update"
    lastUpdate.textContent = "Last Updated: " +data.Countries[x].Date


    details.appendChild(country)
    details.appendChild(newConfirmed)
    details.appendChild(totalConfirmed)
    details.appendChild(newDeaths)
    details.appendChild(totalDeaths)
    details.appendChild(newRecovered)
    details.appendChild(totalRecovered)
    details.appendChild(lastUpdate)
    document.querySelector('section').appendChild(details)
}

const url = "https://api.covid19api.com/summary"

fetch(url)
    .then(x => x.json())
    .then(data => {
        global(data)
        function clear(){
            document.querySelector('section').innerHTML=''
        }
        afghanistan.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "AF"){
               covid(data)
           }
        }
        })
        albania.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "AL"){
               covid(data)
           }
        }
        })
        algeria.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "DZ"){
               covid(data)
           }
        }
        })
        angola.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "AO"){
               covid(data)
           }
        }
        })
        argentina.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "AR"){
               covid(data)
           }
        }
        })
        armenia.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "AM"){
               covid(data)
           }
        }
        })
        australia.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "AU"){
               covid(data)
           }
        }
        })
        austria.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "AT"){
               covid(data)
           }
        }
        
        })
        azerbaijan.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "AZ"){
               covid(data)
           }
        }
        
        })
        bahamas.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "BS"){
               covid(data)
           }
        }
        
        })
        bangladesh.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "BD"){
               covid(data)
           }
        }
        })
        belarus.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "BY"){
               covid(data)
           }
        }
        })
        belgium.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "BE"){
               covid(data)
           }
        }
        })
        belize.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "BZ"){
               covid(data)
           }
        }
        })
        benin.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "BJ"){
               covid(data)
           }
        }
        })
        bhutan.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "BT"){
               covid(data)
           }
        }
        })
        bolivia.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "BO"){
               covid(data)
           }
        }
        })
        bosnia.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "BA"){
               covid(data)
           }
        }
        })
        botswana.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "BW"){
               covid(data)
           }
        }
        })
        brazil.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "BR"){
               covid(data)
           }
        }       
        })
        brunei.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "BN"){
               covid(data)
           }
        }
        })
        bulgaria.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "BG"){
               covid(data)
           }
        }
        })
        burkina.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "BF"){
               covid(data)
           }
        }
        })
        burundi.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "BI"){
               covid(data)
           }
        }
        })
        canada.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "CA"){
               covid(data)
           }
        }
        })
        congokin.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "CD"){
               covid(data)
           }
        }
        })
        cambodia.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "KH"){
               covid(data)
           }
        }
        })
        cameroon.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "CM"){
               covid(data)
           }
        }
        })
        cape.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "CV"){
               covid(data)
           }
        }
        })
        centralafrican.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "CF"){
               covid(data)
           }
        }
        })
        chad.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "TD"){
               covid(data)
           }
        }
        })
        chile.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "CL"){
               covid(data)
           }
        }
        })
        china.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "CN"){
               covid(data)
           }
        }
        })
        colombia.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "CO"){
               covid(data)
           }
        }
        })
        comoros.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "KM"){
               covid(data)
           }
        }
        })
        congobraz.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "CG"){
               covid(data)
           }
        }
        })
        costarica.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "CR"){
               covid(data)
           }
        }
        })
        croatia.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "HR"){
               covid(data)
           }
        }
        })
        cuba.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "CU"){
               covid(data)
           }
        }
        })
        cyprus.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "CY"){
               covid(data)
           }
        }
        })
        canada.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "CA"){
               covid(data)
           }
        }
        })
        czechrepublic.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "CZ"){
               covid(data)
           }
        }
        })
        ivorycoast.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "CI"){
               covid(data)
           }
        }
        })
        denmark.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "DK"){
               covid(data)
           }
        }
        })
        djibouti.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "DJ"){
               covid(data)
           }
        }
        })
        dominica.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "DM"){
               covid(data)
           }
        }
        })
        dominican.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "DO"){
               covid(data)
           }
        }
        })
        ecuador.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "EC"){
               covid(data)
           }
        }
        })
        egypt.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "EG"){
               covid(data)
           }
        }
        })
        elsalvador.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "SV"){
               covid(data)
           }
        }
        })
        equatorialguinea.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "GQ"){
               covid(data)
           }
        }
        })
        eritrea.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "ER"){
               covid(data)
           }
        }
        })
        estonia.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "EE"){
               covid(data)
           }
        }
        })
        ethiopia.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "ET"){
               covid(data)
           }
        }
        })
        finland.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "FI"){
               covid(data)
           }
        }
        })
        france.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "FR"){
               covid(data)
           }
        }
        })
        gabon.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "GA"){
               covid(data)
           }
        }
        })
        gambia.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "GM"){
               covid(data)
           }
        }
        })
        georgia.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "GE"){
               covid(data)
           }
        }
        })
        germany.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "DE"){
               covid(data)
           }
        }
        })
        ghana.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "GH"){
               covid(data)
           }
        }
        })
        greece.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "GR"){
               covid(data)
           }
        }
        })
        greenland.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "DK"){
               covid(data)
           }
        }
        })
        guatemala.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "GT"){
               covid(data)
           }
        }
        })
        guinea.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "GN"){
               covid(data)
           }
        }
        })
        guineabissau.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "GW"){
               covid(data)
           }
        }
        })
        guyana.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "GY"){
               covid(data)
           }
        }
        })
        haiti.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "HT"){
               covid(data)
           }
        }
        })
        honduras.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "HN"){
               covid(data)
           }
        }
        })
        iceland.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "IS"){
               covid(data)
           }
        }
        })
        india.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "IN"){
               covid(data)
           }
        }
        })
        indonesia.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "ID"){
               covid(data)
           }
        }
        })
        iran.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "IR"){
               covid(data)
           }
        }
        })
        iraq.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "IQ"){
               covid(data)
           }
        }
        })
        ireland.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "IE"){
               covid(data)
           }
        }
        })
        israel.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "IL"){
               covid(data)
           }
        }
        })
        italy.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "IT"){
               covid(data)
           }
        }
        })
        jamaica.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "JM"){
               covid(data)
           }
        }
        })
        jordan.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "JO"){
               covid(data)
           }
        }
        })
        japan.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "JP"){
               covid(data)
           }
        }
        })
        kazakhstan.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "KZ"){
               covid(data)
           }
        }
        })
        kenya.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "KE"){
               covid(data)
           }
        }
        })
        koreas.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "KR"){
               covid(data)
           }
        }
        })
        kuwait.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "KW"){
               covid(data)
           }
        }
        })
        kyrgyzstan.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "KG"){
               covid(data)
           }
        }
        })
        lao.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "LA"){
               covid(data)
           }
        }
        })
        latvia.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "LV"){
               covid(data)
           }
        }
        })
        lebanon.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "LB"){
               covid(data)
           }
        }
        })
        lesotho.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "LS"){
               covid(data)
           }
        }
        })
        liberia.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "LR"){
               covid(data)
           }
        }
        })
        libya.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "LY"){
               covid(data)
           }
        }
        })
        lithuania.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "LT"){
               covid(data)
           }
        }
        })
        luxembourg.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "LU"){
               covid(data)
           }
        }
        })
        macedonia.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "MK"){
               covid(data)
           }
        }
        })
        madagascar.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "MG"){
               covid(data)
           }
        }
        })
        malawi.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "MW"){
               covid(data)
           }
        }
        })
        malaysia.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "MY"){
               covid(data)
           }
        }
        })
        maldives.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "MV"){
               covid(data)
           }
        }
        })
        mali.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "ML"){
               covid(data)
           }
        }
        })
        malta.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "MT"){
               covid(data)
           }
        }
        })
        mauritania.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "MR"){
               covid(data)
           }
        }
        })
        mauritius.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "MU"){
               covid(data)
           }
        }
        })
        mexico.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "MX"){
               covid(data)
           }
        }
        })
        moldova.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "MD"){
               covid(data)
           }
        }
        })
        mongolia.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "MN"){
               covid(data)
           }
        }
        })
        montenegro.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "ME"){
               covid(data)
           }
        }
        })
        morocco.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "MA"){
               covid(data)
           }
        }
        })
        mozambique.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "MZ"){
               covid(data)
           }
        }
        })
        myanmar.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "MM"){
               covid(data)
           }
        }
        })
        namibia.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "NA"){
               covid(data)
           }
        }
        })
        nepal.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "NP"){
               covid(data)
           }
        }
        })
        netherlands.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "NL"){
               covid(data)
           }
        }
        })
        newzealand.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "NZ"){
               covid(data)
           }
        }
        })
        nicaragua.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "NI"){
               covid(data)
           }
        }
        })
        niger.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "NE"){
               covid(data)
           }
        }
        })
        nigeria.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "NG"){
               covid(data)
           }
        }
        })
        norway.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "NO"){
               covid(data)
           }
        }
        })
        oman.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "OM"){
               covid(data)
           }
        }
        })
        pakistan.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "PK"){
               covid(data)
           }
        }
        })
        panama.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "PA"){
               covid(data)
           }
        }
        })
        papuanewguinea.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "PG"){
               covid(data)
           }
        }
        })
        paraguay.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "PY"){
               covid(data)
           }
        }
        })
        peru.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "PE"){
               covid(data)
           }
        }
        })
        philippines.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "PH"){
               covid(data)
           }
        }
        })
        poland.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "PL"){
               covid(data)
           }
        }
        })
        portugal.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "PT"){
               covid(data)
           }
        }
        })
        qatar.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "QA"){
               covid(data)
           }
        }
        })
        romania.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "RO"){
               covid(data)
           }
        }
        })
        russia.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "RU"){
               covid(data)
           }
        }
        })
        rwanda.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "RW"){
               covid(data)
           }
        }
        })
        saintlucia.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "LC"){
               covid(data)
           }
        }
        })
        saintvincent.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "VC"){
               covid(data)
           }
        }
        })
        saotome.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "ST"){
               covid(data)
           }
        }
        })
        saudi.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "SA"){
               covid(data)
           }
        }
        })
        senegal.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "SN"){
               covid(data)
           }
        }
        })
        serbia.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "RS"){
               covid(data)
           }
        }
        })
        seychelles.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "SC"){
               covid(data)
           }
        }
        })
        sierraleone.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "SL"){
               covid(data)
           }
        }
        })
        singapore.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "SG"){
               covid(data)
           }
        }
        })
        slovakia.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "SK"){
               covid(data)
           }
        }
        })
        slovenia.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "SI"){
               covid(data)
           }
        }
        })
        somalia.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "SO"){
               covid(data)
           }
        }
        })
        southafrica.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "ZA"){
               covid(data)
           }
        }
        })
        southsudan.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "SS"){
               covid(data)
           }
        }
        })
        spain.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "ES"){
               covid(data)
           }
        }
        })
        srilanka.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "LK"){
               covid(data)
           }
        }
        })
        sudan.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "SD"){
               covid(data)
           }
        }
        })
        suriname.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "SR"){
               covid(data)
           }
        }
        })
        swaziland.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "SZ"){
               covid(data)
           }
        }
        })
        switzerland.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "CH"){
               covid(data)
           }
        }
        })
        sweden.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "SE"){
               covid(data)
           }
        }
        })
        syria.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "SY"){
               covid(data)
           }
        }
        })
        taiwan.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "TW"){
               covid(data)
           }
        }
        })
        tajikistan.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "TJ"){
               covid(data)
           }
        }
        })
        tanzania.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "TZ"){
               covid(data)
           }
        }
        })
        thailand.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "TH"){
               covid(data)
           }
        }
        })
        togo.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "TG"){
               covid(data)
           }
        }
        })
        trinidadandtobago.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "TT"){
               covid(data)
           }
        }
        })
        tunisia.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "TN"){
               covid(data)
           }
        }
        })
        turkey.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "TR"){
               covid(data)
           }
        }
        })
        uganda.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "UG"){
               covid(data)
           }
        }
        })
        ukraine.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "UA"){
               covid(data)
           }
        }
        })
        unitedarabemirates.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "AE"){
               covid(data)
           }
        }
        })
        unitedkingdom.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "GB"){
               covid(data)
           }
        }
        })
        usamerica.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "US"){
               covid(data)
           }
        }
        })
        uruguay.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "UY"){
               covid(data)
           }
        }
        })
        uzbekistan.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "UZ"){
               covid(data)
           }
        }
        })
        venezuela.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "VE"){
               covid(data)
           }
        }
        })
        vietnam.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "VN"){
               covid(data)
           }
        }
        })
        yemen.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "YE"){
               covid(data)
           }
        }
        })
        zambia.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "ZM"){
               covid(data)
           }
        }
        })
        zimbabwe.addEventListener('click', function() {
            clear()
        for(x=0; x<=185; x++){
           if (data.Countries[x].CountryCode === "ZW"){
               covid(data)
           }
        }
        })
        
    })

    // var f =function() {
    //     function eventHandler(event){
    //         var width = parseInt(window.getComputedStyle(this).width);
    //         var height= parseInt(window.getComputedStyle(this).height);
    //         var zoom=40;

    //         if(event.wheelDelta > 0){
    //             this.style.width = Math.min(1000, width + zoom) + "px";
    //             this.style.height = Math.min(1000, height + zoom) + "px";
    //         }
    //         else{
    //             this.style.width = Math.max(800, width - zoom) + "px";
    //             this.style.height = Math.max(800, height - zoom) + "px";
    //         }
    //         event.preventDefault();
    //     }
    //     var imageElement = document.getElementsByTagName('svg')[0];
    //     imageElement.addEventListener("wheel",eventHandler,false);
    // }
    // window.addEventListener('load',f,false);