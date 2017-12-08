$(function(){
 var client = ZAFClient.init();
   //var user_fields = client.get('ticket_fields.json')
  client.get('ticket.url').then(function(data) {
  console.log(data);
  requestUserInfo(client);
});
}
);


function requestUserInfo(client) {
  var settings = {
    url: 'https://trouva.zendesk.com/api/v2/ticket_fields.json', 
    type:'GET',
    dataType: 'json',
  };

    client.request(settings).then(
    function(data) {
      console.dir(data);
    },
    function(response) {
      console.error(response);
    }
  );
}

