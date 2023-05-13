const base_url = "https://retoolapi.dev/Gsgwbb/people";

$(function () {
  listPeople();
  $("#save").click(function (e) {
    e.preventDefault();
    const name = $("#name_input").val();
    const email = $("#email_input").val();
    const job = $("#job_input").val();
    const id = $("#personID").val();

    const person = {
      id: id,
      name: name,
      email: email,
      job: job,
    };
    $.ajax({
      type: "PUT",
      url: `${base_url}/${id}`,
      contentType: "application/json",
      dataType: "json",
      data: JSON.stringify(person),
      success: function (data, textStatus, jqXHR) {
        if (textStatus === "success") {
          listPeople();
          $('button[type="button"]').prop("enabled", true);
          console.log(textStatus);
        }
      },
    });
    //updatePerson();
  });

   $("#person-form").submit(function (e) {
    e.preventDefault();
    const name = $("#name_input").val();
    const email = $("#email_input").val();
    const job = $("#job_input").val();
    const person = {
      name: name,
      email: email,
      job: job,
    };
    $.post(
      base_url,
      person,
      function (data, textStatus, jqXHR) {
        if (textStatus === "success") {
          $("#name_input").val("");
          $("#email_input").val("");
          $("#job_input").val("");
          listPeople();
        }
      },
      "json"
    );
  });
});

function readPerson(personId) {
  $.get(
    base_url + "/" + personId,
    function (data, textStatus) {
      $("#name_input").val(data.name);
      $("#email_input").val(data.email);
      $("#job_input").val(data.job);
      $("#personID").val(data.id);
      $('button[type="submit"]').prop("disabled", true);
      console.log($("#personID").val());
    },
    "json"
  );
}

function deletePerson(personId) {
  $.ajax({
    type: "DELETE",
    url: `${base_url}/${personId}`,
    dataType: "json",
    success: function (data, textStatus, jqXHR) {
      if (textStatus === "success") {
        listPeople();
      }
    },
  });
}

function listPeople() {
  $.get(
    base_url,
    function (data, textStatus) {
      let html = "";
      data.forEach((person) => {
        html += `<tr>
                <td>${person.id}</td>
                <td>${person.name}</td>
                <td>${person.email}</td>
                <td>${person.job}</td>
                <td>
                <i onclick="deletePerson(${person.id})" class="fa fa-remove"></i>
                </td>
                <td>
                <i onclick="readPerson(${person.id})" class="fa fa-pencil-square-o" aria-hidden="true"></i>
                </td>
            </tr>`;
      });
      $("#people-table").html(html);
    },
    "json"
  );
  $('button[type="submit"]').prop("disabled", false);
}
