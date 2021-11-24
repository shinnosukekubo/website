import "./Career.css";
import facePicture from "../../../resources/golang.webp";
import { useState, useEffect } from "react";
import { useFetch } from "../../../hocks/Fetch";

export default function Career() {
 // const [introductionText, setIntroductionText] = useState("");
  //const { loading, data, error } = useFetch("http://localhost:8888/getIntroductionText");
  //introductionText = 
  // useEffect(() => {
  //   setIntroductionText(data);
  // }, [introductionText, data]);

  //   useEffect(() => {
  //     const { loading, data, error } = useFetchFromDefaultServer(
  //         "getIntroductionText"
  //       );
  //       setIntroductionText(data);
  //     const get_introduction_text = async () => {
  //       // eslint-disable-next-line react-hooks/rules-of-hooks

  //     };
  //     get_introduction_text();
  // if (error) return <h1>Error</h1>;
  // if (loading) return <h1>Loading</h1>; 
  return (
    <div className="body">
      <div className="top">
        <div className="introduction-div">
          <div className="introduction-content">
            <img src={facePicture} className="face-picture" alt="logo" />
            <div className="introduction-text">
              <div className="name-text">久保 槙之介</div>
              <div>札幌市在住<br/>
              主にC# .Net分野でフリーランスエンジニアをやっています。</div>
            </div>
          </div>
        </div>
        <div className="none-div"></div>

       
      </div>
      <div className="career">
          <table>
          <tr>
            <th>期間</th>
            <th>案件</th>
            <th>主な経験</th>
            <th>担当</th>
          </tr>
          <tr>
              <th className="th-strong" colSpan="4">ゲーム会社に入社</th>
            </tr>
            <tr>
              <th>2017/04~2017/12</th>
              <td>ゲームアプリ開発</td>
              <td>C#,MySQL,Redmine,GitBucket,VSCode</td>
              <td>バックエンド開発、運営
              </td>
            </tr>
            <tr>
              <th>2018/01~2018/12</th>
              <td>ゲームアプリ開発</td>
              <td>LAMP,Phalcon,Vagrant,Bash,GAS,Redis</td>
              <td>バックエンド開発</td>
            </tr>
            <tr>
              <th>2019/01~2019/10</th>
              <td>ゲームアプリ開発</td>
              <td>Node.js,Express,MongoDB,WebStorm,Jenkins,JIRA,Confluence,Docker</td>
              <td>開発</td>
            </tr>
            <tr>
              <th className="th-strong" colSpan="4">業務アプリ開発会社に入社</th>
            </tr>
            <tr>
              <th>2019/11~2021/09</th>
              <td>介護事業向けアプリ開発</td>
              <td>C#,ASP.NET,EF,SqlServer,WindowsForms,Xamarin,Azure,Android,Backlog</td>
              <td>開発、運営</td>
            </tr>
            <tr>
              <th>2020/09~2021/09</th>
              <td>顧客管理システム</td>
              <td>C#,ASP.NET Core,EF Core,SqlServer,WPF,GraphQL,Azure,Jenkins,Docker</td>
              <td>PM、開発、運営</td>
            </tr>
            <tr>
              <th>2021/01~2021/06</th>
              <td>事故報告システム</td>
              <td>C#,ASP.NET Core,EF Core,SqlServer,WPF,XAML,Azure</td>
              <td>開発</td>
            </tr>
            <tr>
              <th>2020/09~2021/09</th>
              <td>シングルサインオン構築</td>
              <td>C#,ASP.NET Core,EF Core,SqlServer,WPF,Azure,JWT</td>
              <td>PM、開発、運営</td>
            </tr>
            <tr>
              <th className="th-strong" colSpan="4">フリーランスに転身</th>
            </tr>
          </table>
        </div>
    </div>
  );
}
