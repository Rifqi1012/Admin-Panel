import { useRouter } from 'next/router';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import PendaratanTable from 'src/views/pages/petugas/pendaratan/PendaratanTable';
import { Button, CardActions } from '@mui/material';

const Pendaratan = () => {
  const router = useRouter();

  const handleCreateButtonClick = () => {
    router.push('/petugas/pendaratan/create');
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom sx={{marginBottom : '16px'}}>
        Pendaratan
      </Typography>
      <Card>
        <CardHeader
          title='Data Pendaratan'
          action={
            <div>
              <Button size='medium' variant='contained' onClick={handleCreateButtonClick}>
                Buat Data Pendaratan
              </Button>
            </div>
          }
        />
        <PendaratanTable />
      </Card>
    </div>
  );
};

export default Pendaratan;
