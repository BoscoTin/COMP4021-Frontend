import { CardHeader, Avatar, Badge, CircularProgress } from "@material-ui/core";
import { AccountCircleSharp } from "@material-ui/icons";

export default function ({ avatar, displayname, from, isSelf, isBadge }) {

  return (
    <CardHeader
      avatar={
        isBadge ? (
          <Badge color="primary">
            <Avatar src={"/" + avatar}>
              <AccountCircleSharp />
            </Avatar>
          </Badge>
        ) : (
          <Avatar src={"/" + avatar}>
            <AccountCircleSharp />
          </Avatar>
        )
      }
      title={displayname}
      titleTypographyProps={{
        variant: "h6",
        color: isSelf ? "textPrimary" : "textSecondary",
      }}
      subheader={from}
      subheaderTypographyProps={{
        variant: "body2",
        color: isSelf ? "primary" : "textSecondary",
      }}
    />
  );
}
