import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Input,
  InputAdornment,
  Paper,
  Typography
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const MessageItem = () => {
  return (
    <Card
      sx={{
        borderRadius: 0,
        boxShadow: 0,
        border: "1px solid #eee",
      }}
    >
      <CardActionArea
        sx={{
          px: 2,
          pb: 1,
          display: "flex",
          flexDirection: "row"
        }}
      >
        <Avatar sx={{ width: 48, height: 48}}/>
        <CardContent
          sx={{
            flex: 1,
            overflow: "hidden",
            py: 2,
            height: 96
          }}
        >
          <Typography variant="h4">
            ユーザー名
          </Typography>
          <Typography variant="body2"
            sx={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3
            }}
          >
            メッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージメッセージ
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

const MessageList = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        mt: 2,
      }}
    >
      {[...(Array(10))].map((item, idx) => (
        <MessageItem key={idx}/>
      ))}
    </Box>
  )
}

const RecentMatch = () => {
  return (
    <Box 
      sx={{
        mt: 2,
        width: 1,
        overflowX: 'auto',
        pb: 2
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'no-wrap',
          gap: '4px'
        }}
      >
        {[...(Array(30))].map((item, idx) => (
          <Avatar key={idx} sx={{ width: 32, height: 32}}/>
        ))}
      </Box>
    </Box>
  )
}

export const Friend = () => {
  return (
    <Paper sx={{mt: 12, p: 2, maxWidth: 500, mx: 'auto'}}>
      <Typography variant="h2" align="center">
        フレンド一覧
      </Typography>
      <RecentMatch/>
      <Input
        sx={{ mt: 2, mx: 0, flex: 1 }}
        fullWidth
        placeholder="フレンド名で検索"
        inputProps={{ 'aria-label': 'search google maps' }}
        endAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
      <Typography variant="h3" sx={{mt: 3}}>
        メッセージリスト
      </Typography>
      <Divider/>
      <Box>
        <MessageList/>
      </Box>
    </Paper>
  )
}