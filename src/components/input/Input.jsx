export function input({children}) {
    return (
        <input>

        </input>
    )
}
<form className="form" method="post" action="/login" autocomplete="off">
<div className="field">
  <label for="username">Notendanafn</label>
  <input type="text" name="username" id="username"/>
</div>

<div className="field">
  <label for="password">Lykilorð</label>
  <input type="password" name="password" id="password"/>
</div>