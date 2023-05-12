const base_url = "https://retoolapi.dev/Gsgwbb/people";

$(function () {
  listPeople();
  $("#save").click(function () {
    const personId = $("#personID").val();
    console.log(personId);
    updatePerson(personId);
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
      $("#pearsonID").val(data.id);
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
function updatePerson(personId) {
    
  console.log($("#personID").val());
  $.ajax({
    type: "PUT",
    url: `${base_url}/${$("#personID").val()}`,
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
}
