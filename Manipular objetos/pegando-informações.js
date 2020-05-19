const data = {
    "result":"success",
    "creditrequest":[
        {
            "id":18608,
            "state":"Awaiting Score",
            "state_id":4
        }
    ]
}
alert(data.creditrequest[0].id);