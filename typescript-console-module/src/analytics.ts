let logged: boolean;

function sendanalytics(data: string) {
  console.log(data);

  logged = true;
}

sendanalytics("Hey!");
