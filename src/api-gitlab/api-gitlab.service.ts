import { Injectable } from "@nestjs/common";
import fetch from "node-fetch";

@Injectable()
export class ApiGitlabService {

  async getHello(res, req): Promise<any> {
    try {
      let fetchedData = [];
      await fetch(`https://gitlab.com/api/v4/projects/${req.query.projectId}/merge_requests`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "PRIVATE-TOKEN": req.query.access_token
          }
        }).then((response) => {
        return response.json();
      })
        .then((data) => {
          fetchedData = data
        });

      const openedBranch = [];
      const mergedBranch = [];

      fetchedData.forEach((item) => {

        if (item.state === "opened") {
          openedBranch.push(item);
        }
        if (item.state === "merged") {
          const nowDate = new Date();
          const yesterday = new Date(nowDate);
          yesterday.setDate(yesterday.getDate() - 3);

          if (yesterday < new Date(item.merged_at)) {
            mergedBranch.push(item);
          }

        }


      });
      const todayMergedTitle = `*Today merged - ${mergedBranch.length} merge requests*\n
      ${mergedBranch.map((value) => {

        const date = new Date(value.merged_at);
        return "\r\tBranch *`" + `${value.source_branch}` + "`* merged to *`" + value.target_branch + "`* in *" + date.getHours() + ":" + date.getMinutes() + "* by *" + value.merge_user.username + "*" + "\n"
      })}`;


      const data = {
        response_type: "in_channel",
        text: todayMergedTitle.replace(/\,/g, "")
      };

      res.json(data);
    } catch (err) {
      throw Error(err);
    }

  }
}
