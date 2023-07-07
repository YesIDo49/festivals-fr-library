const fetch = require("node-fetch");

function getFestivals() {

    let festivalList = [];

    fetch('https://data.culture.gouv.fr/api/records/1.0/search/?dataset=panorama-des-festivals&q=&rows=150&facet=region&facet=domaine&facet=complement_domaine&facet=departement&facet=mois_habituel_de_debut')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de réseau : ' + response.status);
            }
            return response.json();
        })
        .then(data => {


            data.records.forEach(function(element){
                // the methods used for "date_debut_ancien" and "" substracts "2019-", in order to only get the month and the day, and the others reversed the date so it could be in the french format
                festivalList.push({ nom_festival: element.fields.nom_de_la_manifestation, date_debut: element.fields.date_debut_ancien.substring(5).split("-").reverse().join("-"), date_fin: element.fields.date_de_fin_ancien.substring(5).split("-").reverse().join("-"), lieu: element.fields.commune_principale });
            })
            console.log(festivalList)

        })
        .catch(error => {
            console.error('Erreur :', error);
        });
}

module.exports = getFestivals;