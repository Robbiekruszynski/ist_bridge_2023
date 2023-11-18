import { useEffect, useState } from 'react';

// material-ui
import { Grid, FormControl } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// project imports
// import FromCard from './FromCardClass';
// import ToCard from './ToCardClass';
// import PopularCard from './PopularCard';
// import TotalOrderLineChartCard from './TotalOrderLineChartCard';
// import TotalIncomeDarkCard from './TotalIncomeDarkCard';
// import TotalIncomeLightCard from './TotalIncomeLightCard';
import MethodCard from './MethodCard';
// import DashboardHeading from './DashboardHeading';
import { gridSpacing } from 'store/constant';
// import ChainSwitcherStyle from './ChainsSelectStyle';
import { Networks } from 'views/utilities/Networks';
import FromToSection from './FromToSectionClass';
// import FromToSection from './FromToSectionTest';
import DashboardHeading from './DashboardHeading';
import FinalizeButtonsCard from './FinalizeButtonsCard';
import PreviousTxsCard from './PreviousTxsCard';


// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);


  
  const theme = useTheme();
  // console.log(theme);
  const networks = Networks();

  return (
    <form noValidate autoComplete="off">
    <FormControl fullWidth  pb={3}>
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing} isLoading={isLoading}>
            <Grid item xs={12} lg={8} xl={9}>
                <DashboardHeading />
            </Grid>
            <Grid item xs={12} lg={9}>
              <Grid container spacing={gridSpacing} isLoading={isLoading}>
                <Grid item xs={12}>
                  <FromToSection networks={networks} />
                </Grid>
                <Grid item xs={12}>
                  <MethodCard isLoading={isLoading} theme={theme} />
                </Grid>
                <Grid item xs={12}>
                  <FinalizeButtonsCard isLoading={isLoading} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={3} >
              <Grid container spacing={gridSpacing} isLoading={isLoading}>
                <Grid item xs={12} style={{paddingTop: "55px"}}>
                  <PreviousTxsCard isLoading={isLoading} networks={networks} />
                </Grid>
                
              </Grid>
            </Grid>
          
        </Grid>
        
      </Grid>
      {/* <Grid item lg={4} md={12} sm={12} xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item sm={6} xs={12} md={6} lg={12}>
                        <TotalIncomeDarkCard isLoading={isLoading} />
                        </Grid>
                        <Grid item sm={6} xs={12} md={6} lg={12}>
                        <TotalIncomeLightCard isLoading={isLoading} />
                        </Grid>
                    </Grid>
                </Grid> */}
      {/* <Grid item xs={12}>
        <Grid container spacing={gridSpacing} isLoading={isLoading}>
          <Grid item xs={12} md={8}>
             <MethodCard isLoading={isLoading} /> 
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularCard isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid> */}
    </Grid>
    </FormControl>
    </form>
  );
};

export default Dashboard;